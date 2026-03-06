<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Notificações" icon="notifications" />
    </q-breadcrumbs>
    <q-expansion-item
      dense
      dense-toggle
      expand-separator
      label="Filtros de pesquisa"
      header-class="text-primary bg-blue-1"
      class="q-mt-md"
    >
      <div class="pesquisa">
        <q-input v-model="pesquisa.titulo" label="Título" />
        <q-select v-model="pesquisa.status" :options="status" label="Status" class="select" />
      </div>
    </q-expansion-item>
    <div class="q-mt-md" style="margin: 2rem 0">
      <q-btn-group spread>
        <q-btn color="primary" icon="search" @click="buscaNotificacoes">
          <q-tooltip>Pesquisar</q-tooltip>
        </q-btn>
        <q-btn color="green" icon="add" @click="alertSalvar"
          ><q-tooltip>Cadastrar</q-tooltip>
        </q-btn>
        <q-btn color="info" icon="edit" @click="alertEditar"><q-tooltip>Editar</q-tooltip> </q-btn>
        <q-btn color="red" icon="delete" @click="remove"><q-tooltip>Apagar</q-tooltip> </q-btn>
      </q-btn-group>
    </div>
    <div class="q-mt-md">
      <q-table title="" :rows="rows" :columns="columns" row-key="id" @row-click="selecionar">
        <template v-slot:body-cell-id="props">
          <q-td :props="props">
            <q-checkbox
              :model-value="selecionada?.id === props.row.id"
              @update:model-value="() => selecionar(null as any, props.row)"
              @click.stop
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>

  <q-dialog v-model="modal">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ notificacao.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="notificacao.titulo" label="Título *" lazy-rules />

          <q-select v-model="notificacao.status" :options="status" label="Status *" lazy-rules />
          <q-editor v-model="notificacao.msg" />

          <div>
            <q-btn label="Salvar" type="submit" color="primary" />
            <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn flat label="Cancelar" color="negative" v-close-popup />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Notify } from 'quasar';
import type { QTableColumn } from 'quasar';
import { supabase } from 'src/boot/supabase';

interface Notificacao {
  id: number | null;
  titulo: string;
  msg: string;
  status: string;
}

const columns: QTableColumn<Notificacao>[] = [
  {
    name: 'id',
    label: '#',
    field: 'id',
    align: 'center',
    sortable: true,
  },
  {
    name: 'titulo',
    label: 'Título',
    field: 'titulo',
    align: 'left',
    sortable: true,
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    align: 'left',
    sortable: true,
  },
];

const showProgress = ref(true);
const modal = ref(false);
const rows = ref<Notificacao[]>([]);
const selecionada = ref<Notificacao | null>(null);
const status = ['Ativo', 'Inativo'];

const pesquisa = ref({
  titulo: '',
  msg: '',
  status: '',
});

const notificacao = ref<Notificacao>({
  id: null,
  titulo: '',
  msg: '',
  status: '',
});

const onSubmit = () => {
  if (notificacao.value.id) {
    void update();
  } else {
    void create();
  }
};

const onReset = () => {
  notificacao.value = {
    id: null,
    titulo: '',
    msg: '',
    status: '',
  };
};

const selecionar = (_: Event, row: Notificacao) => {
  selecionada.value = row;
  notificacao.value = { ...row };
};

async function buscaNotificacoes() {
  showProgress.value = true;

  let query = supabase.from('notificacoes').select('*');

  if (pesquisa.value.titulo) {
    query = query.ilike('titulo', `%${pesquisa.value.titulo}%`);
  }

  if (pesquisa.value.msg) {
    query = query.ilike('msg', `%${pesquisa.value.msg}%`);
  }

  if (pesquisa.value.status) {
    query = query.eq('status', pesquisa.value.status);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    showProgress.value = false;
    return;
  }

  rows.value = data;
  showProgress.value = false;
}

const create = async () => {
  const { error } = await supabase.from('notificacoes').insert([
    {
      titulo: notificacao.value.titulo,
      msg: notificacao.value.msg,
      status: notificacao.value.status,
    },
  ]);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao salvar nova notificação',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Notificação criada com sucesso',
  });

  modal.value = false;
  await buscaNotificacoes();
  onReset();
};

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const update = async () => {
  if (!notificacao.value.id) return;

  const { error } = await supabase
    .from('notificacoes')
    .update({
      titulo: notificacao.value.titulo,
      msg: notificacao.value.msg,
      status: notificacao.value.status,
    })
    .eq('id', notificacao.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao atualizar notificação',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Notificação atualizada',
  });

  modal.value = false;
  await buscaNotificacoes();
};

const alertEditar = () => {
  if (!notificacao.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha uma notificação',
    });
    return;
  }

  modal.value = true;
};

const remove = async () => {
  if (!notificacao.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha uma notificação',
    });
    return;
  }

  if (!confirm('Tem certeza que deseja apagar?')) return;

  const { error } = await supabase.from('notificacoes').delete().eq('id', notificacao.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao apagar notificação',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Notificação removida',
  });

  await buscaNotificacoes();
  onReset();
};

onMounted(() => {
  void buscaNotificacoes();
  showProgress.value = false;
});
</script>

<style scoped>
.pesquisa {
  display: flex;
  gap: 1rem;
}
.select {
  min-width: 150px;
}
</style>

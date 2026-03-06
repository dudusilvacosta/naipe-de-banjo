<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Donwloads" icon="download" />
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
        <q-input v-model="pesquisa.nome" label="Título" />
        <q-select v-model="pesquisa.status" :options="status" label="Status" class="select" />
      </div>
    </q-expansion-item>
    <div class="q-mt-md" style="margin: 2rem 0">
      <q-btn-group spread>
        <q-btn color="primary" icon="search" @click="buscaDownloads">
          <q-tooltip>Pesquisar</q-tooltip>
        </q-btn>
        <q-btn color="green" icon="add" @click="alertSalvar"
          ><q-tooltip>Cadastrar</q-tooltip>
        </q-btn>
        <q-btn color="info" icon="edit" @click="alertEditar"><q-tooltip>Editar</q-tooltip> </q-btn>
        <q-btn color="red" icon="delete" @click="apagar"><q-tooltip>Apagar</q-tooltip> </q-btn>
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
        <div class="text-h6">{{ download.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="download.nome" label="Nome *" lazy-rules />

          <q-input v-model="download.id_drive" label="ID" hint="" lazy-rules />
          <q-select v-model="download.status" :options="status" label="Status" class="select" />

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

interface Download {
  id: number | null;
  nome: string;
  id_drive: string;
  status: string;
}

const columns: QTableColumn<Download>[] = [
  {
    name: 'id',
    label: '#',
    field: 'id',
    align: 'center',
    sortable: true,
  },
  {
    name: 'nome',
    label: 'Título',
    field: 'nome',
    align: 'left',
    sortable: true,
  },
  {
    name: 'id_drive',
    label: 'ID',
    field: 'id_drive',
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
const rows = ref<Download[]>([]);
const selecionada = ref<Download | null>(null);
const status = ['Ativo', 'Inativo'];

const pesquisa = ref({
  nome: '',
  id_drive: '',
  status: '',
});

const download = ref<Download>({
  id: null,
  nome: '',
  id_drive: '',
  status: '',
});

const onSubmit = () => {
  if (download.value.id) {
    void editar();
  } else {
    void salvar();
  }
};

const onReset = () => {
  download.value = {
    id: null,
    nome: '',
    id_drive: '',
    status: '',
  };
};

const selecionar = (_: Event, row: Download) => {
  selecionada.value = row;
  download.value = { ...row };
};

async function buscaDownloads() {
  let query = supabase.from('downloads').select('*');

  if (pesquisa.value.nome) {
    query = query.ilike('nome', `%${pesquisa.value.nome}%`);
  }

  if (pesquisa.value.id_drive) {
    query = query.ilike('id_drive', `%${pesquisa.value.id_drive}%`);
  }

  if (pesquisa.value.status) {
    query = query.eq('status', pesquisa.value.status);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    return;
  }

  rows.value = data;
}

const salvar = async () => {
  const { error } = await supabase.from('downloads').insert([
    {
      nome: download.value.nome,
      id_drive: download.value.id_drive,
      status: download.value.status,
    },
  ]);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao salvar download',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Download criado com sucesso',
  });

  modal.value = false;
  await buscaDownloads();
  onReset();
};

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const editar = async () => {
  if (!download.value.id) return;

  const { error } = await supabase
    .from('downloads')
    .update({
      nome: download.value.nome,
      id_drive: download.value.id_drive,
      status: download.value.status,
    })
    .eq('id', download.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao atualizar download',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Download atualizado',
  });

  modal.value = false;
  await buscaDownloads();
};

const alertEditar = () => {
  if (!download.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha um download',
    });
    return;
  }
  modal.value = true;
};

const apagar = async () => {
  if (!download.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha um download',
    });
    return;
  }

  if (!confirm('Tem certeza que deseja apagar?')) return;

  const { error } = await supabase.from('downloads').delete().eq('id', download.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao apagar download',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Download removido',
  });

  await buscaDownloads();
  onReset();
};

onMounted(() => {
  void buscaDownloads();
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

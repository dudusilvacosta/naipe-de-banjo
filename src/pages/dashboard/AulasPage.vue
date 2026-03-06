<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Aulas" icon="video_library" />
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
        <q-input v-model="pesquisa.nome" label="Album" />

        <q-select v-model="pesquisa.status" :options="status" label="Status" class="select" />
      </div>
    </q-expansion-item>
    <div class="q-mt-md" style="margin: 2rem 0">
      <q-btn-group spread>
        <q-btn color="primary" icon="search" @click="buscaAulas">
          <q-tooltip>Pesquisar</q-tooltip>
        </q-btn>
        <q-btn color="green" icon="add" @click="alertSalvar">
          <q-tooltip>Cadastrar</q-tooltip>
        </q-btn>
        <q-btn color="info" icon="edit" @click="alertEditar">
          <q-tooltip>Editar</q-tooltip>
        </q-btn>
        <q-btn color="red" icon="delete" @click="apagar">
          <q-tooltip>Apagar</q-tooltip>
        </q-btn>
      </q-btn-group>
    </div>

    <div class="q-mt-md">
      <q-table :rows="rows" :columns="columns" row-key="id" @row-click="selecionar">
        <template v-slot:body-cell-id="props">
          <q-td :props="props">
            <q-checkbox
              :model-value="selecionada?.id === props.row.id"
              @update:model-value="(val) => val && selecionar(null, props.row)"
              @click.stop
            />
          </q-td>
        </template>

        <template v-slot:body-cell-videos="props">
          <q-td :props="props">
            {{ props.row.videos?.length || 0 }}
          </q-td>
        </template>
      </q-table>
    </div>
  </div>

  <q-dialog v-model="modal">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ aula.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="aula.nome" label="Album *" lazy-rules />
          <q-select v-model="aula.status" :options="status" label="Status" />
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
import { ref, onMounted, computed } from 'vue';
import { Notify } from 'quasar';
import type { QTableColumn } from 'quasar';
import { supabase } from 'src/boot/supabase';

interface Aula {
  id: number | null;
  nome: string;
  videos: unknown[];
  status: string;
}

const columns: QTableColumn<Aula>[] = [
  { name: 'id', label: '#', field: 'id', align: 'center', sortable: false },
  { name: 'nome', label: 'Aula', field: 'nome', align: 'left', sortable: true },
  { name: 'videos', label: 'Nº Vídeos', field: 'videos', align: 'left', sortable: true },
  { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
];

const showProgress = ref(true);
const modal = ref(false);
const rows = computed(() => aulas.value);
const selecionada = ref<Aula | null>(null);
const aulas = ref<Aula[]>([]);
const status = ['Ativo', 'Inativo'];

const pesquisa = ref({
  nome: '',
  status: '',
});

const aula = ref<Aula>({
  id: null,
  nome: '',
  videos: [],
  status: '',
});

const onSubmit = () => {
  if (aula.value.id) {
    void editar();
  } else {
    void salvar();
  }
};

const onReset = () => {
  aula.value = { id: null, nome: '', videos: [], status: '' };
};

const selecionar = (_: Event | null, row: Aula) => {
  selecionada.value = row;
  aula.value = { ...row };
};

async function buscaAulas() {
  let query = supabase.from('aulas').select('*').order('nome', { ascending: true });

  if (pesquisa.value.nome) {
    query = query.ilike('nome', `%${pesquisa.value.nome}%`);
  }

  if (pesquisa.value.status) {
    query = query.eq('status', pesquisa.value.status);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    return;
  }

  aulas.value = (data as Record<string, unknown>[]).map((item) => ({
    id: item.id as number,
    nome: item.nome as string,
    videos: (item.videos as unknown[]) || [],
    status: item.status as string,
  }));
}

const salvar = async () => {
  const { error } = await supabase.from('notificacoes').insert([
    {
      nome: aula.value.nome,
      videos: aula.value.videos,
      status: aula.value.status,
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
  await buscaAulas();
  onReset();
};

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const editar = async () => {
  if (!aula.value.id) return;

  const { error } = await supabase
    .from('notificacoes')
    .update({
      nome: aula.value.nome,
      videos: aula.value.videos,
      status: aula.value.status,
    })
    .eq('id', aula.value.id);

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
  await buscaAulas();
};

const alertEditar = () => {
  if (!aula.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha uma notificação',
    });
    return;
  }

  modal.value = true;
};

const apagar = async () => {
  if (!aula.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha uma notificação',
    });
    return;
  }

  if (!confirm('Tem certeza que deseja apagar?')) return;

  const { error } = await supabase.from('notificacoes').delete().eq('id', aula.value.id);

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

  await buscaAulas();
  onReset();
};

onMounted(() => {
  void buscaAulas();
  showProgress.value = false;
});
</script>

<style scoped>
.pesquisa {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.select {
  min-width: 150px;
}
</style>

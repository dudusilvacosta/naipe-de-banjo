<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Donwloads" icon="download" />
    </q-breadcrumbs>
    <div class="pesquisa">
      <q-input v-model="pesquisa.nome" label="Título" />
      <q-select v-model="pesquisa.status" :options="status" label="Status" class="select" />
    </div>

    <div class="q-mt-md" style="margin: 2rem 0">
      <q-btn-group spread>
        <q-btn color="primary" icon="search">
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
import type { QTableColumn } from 'quasar';
import { supabase } from 'src/boot/supabase';

const modal = ref(false);
const showProgress = ref(true);
const status = ['Ativo', 'Inativo'];
const selecionada = ref<Download | null>(null);

interface Download {
  id: number | null;
  nome: string;
  id_drive: string;
  status: string;
}
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

const rows = ref<Download[]>([]);

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const alertEditar = () => {
  if (!download.value.id) {
    window.alert('Escolha uma cifra');
    return;
  }
  modal.value = true;
};

const salvar = () => {
  //
};

const editar = () => {
  //
};

const apagar = () => {
  if (!download.value.id) {
    window.alert('Escolha uma cifra');
    return;
  }
  if (confirm('Tem certeza que deseja apagar?')) {
    console.log('Item apagado!');
  } else {
    console.log('Ação cancelada.');
  }
};

const onSubmit = () => {
  if (download.value.id) {
    editar();
  } else {
    salvar();
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
  const { data, error } = await supabase.from('downloads').select('*');

  if (error) {
    console.log(error);
    return;
  }

  rows.value = data;
}

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

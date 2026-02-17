<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Fotos" icon="image" />
    </q-breadcrumbs>
    <div class="pesquisa">
      <q-input v-model="pesquisa.nome" label="Album" />
      <q-date v-model="pesquisa.ano" minimal />

      <q-select v-model="pesquisa.status" :options="status" label="Status" class="select" />
    </div>

    <div class="q-mt-md" style="margin: 2rem 0">
      <q-btn-group spread>
        <q-btn color="primary" label="Pesquisar" icon="search" />
        <q-btn color="green" label="Cadastrar" icon="add" @click="alertSalvar" />
        <q-btn color="info" label="Editar" icon="edit" @click="alertEditar" />
        <q-btn color="red" label="Apagar" icon="delete" @click="apagar" />
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

        <template v-slot:body-cell-fotos="props">
          <q-td :props="props">
            {{ album.fotos.length }}
          </q-td>
        </template>
      </q-table>
    </div>
  </div>

  <q-dialog v-model="modal">
    <q-card style="width: 100%">
      <q-card-section>
        <div class="text-h6">{{ album.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="album.nome" label="Album *" lazy-rules />

          <q-date v-model="album.ano" minimal />

          <q-select v-model="album.status" :options="status" label="Status" />

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
import { useTimeout } from 'quasar';
import type { QTableColumn } from 'quasar';

const modal = ref(false);
const showProgress = ref(true);
const { registerTimeout } = useTimeout();
const status = ['Ativo', 'Inativo'];
const selecionada = ref<Album | null>(null);

interface Album {
  id: number | null;
  nome: string;
  ano: string;
  fotos: [];
  status: string;
}
const pesquisa = ref({
  nome: '',
  ano: '',
  status: true,
});
const album = ref<Album>({
  id: null,
  nome: '',
  ano: '',
  fotos: [],
  status: '',
});
const columns: QTableColumn<Album>[] = [
  {
    name: 'id',
    label: '#',
    field: 'id',
    align: 'center',
    sortable: false,
  },
  {
    name: 'nome',
    label: 'Album',
    field: 'nome',
    align: 'left',
    sortable: true,
  },
  {
    name: 'ano',
    label: 'Ano',
    field: 'ano',
    align: 'left',
    sortable: true,
  },
  {
    name: 'fotos',
    label: 'N Fotos',
    field: 'fotos',
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

const rows: Album[] = [
  {
    id: 1,
    nome: 'Círio',
    ano: '2025-10-10',
    fotos: [],
    status: 'Ativo',
  },
  {
    id: 2,
    nome: 'Tempo Perdido',
    ano: 'Legião Urbana',
    fotos: [],
    status: 'Inativo',
  },
  {
    id: 3,
    nome: 'Trem Bala',
    ano: 'Ana Vilela',
    fotos: [],
    status: 'Inativo',
  },
];

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const alertEditar = () => {
  if (!album.value.id) {
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
  if (!album.value.id) {
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
  if (album.value.id) {
    editar();
  } else {
    salvar();
  }
};

const onReset = () => {
  album.value = {
    id: null,
    nome: '',
    ano: '',
    fotos: [],
    status: '',
  };
};

const selecionar = (_: Event, row: Album) => {
  selecionada.value = row;
  album.value = { ...row };
};

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms
});
</script>

<style scoped>
.pesquisa {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.select {
  min-width: 150px;
}
</style>

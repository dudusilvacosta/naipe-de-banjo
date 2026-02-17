<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Aulas" icon="video_library" />
    </q-breadcrumbs>
    <div class="pesquisa">
      <q-input v-model="pesquisa.nome" label="Tema" />
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

        <template v-slot:body-cell-aulas="props">
          <q-td :props="props">
            {{ aula.aulas.length }}
          </q-td>
        </template>
      </q-table>
    </div>
  </div>

  <q-dialog v-model="modal">
    <q-card style="width: 100%">
      <q-card-section>
        <div class="text-h6">{{ aula.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="aula.tema" label="Tema *" lazy-rules />

          <q-select v-model="aula.status" :options="status" label="Status" class="select" />

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
const selecionada = ref<Aula | null>(null);

interface Aula {
  id: number | null;
  tema: string;
  aulas: [];
  status: string;
}
const pesquisa = ref({
  nome: '',
  aulas: [],
  status: true,
});
const aula = ref<Aula>({
  id: null,
  tema: '',
  aulas: [],
  status: '',
});
const columns: QTableColumn<Aula>[] = [
  {
    name: 'id',
    label: '#',
    field: 'id',
    align: 'center',
    sortable: false,
  },
  {
    name: 'tema',
    label: 'Tema',
    field: 'tema',
    align: 'left',
    sortable: true,
  },
  {
    name: 'aulas',
    label: 'N Aulas',
    field: 'aulas',
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

const rows: Aula[] = [
  {
    id: 1,
    tema: 'inicias BP',
    aulas: [],
    status: 'Ativo',
  },
  {
    id: 2,
    tema: 'Tempo Perdido',
    aulas: [],
    status: 'Inativo',
  },
  {
    id: 3,
    tema: 'Trem Bala',
    aulas: [],
    status: 'Inativo',
  },
];

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const alertEditar = () => {
  if (!aula.value.id) {
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
  if (!aula.value.id) {
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
  if (aula.value.id) {
    editar();
  } else {
    salvar();
  }
};

const onReset = () => {
  aula.value = {
    id: null,
    tema: '',
    aulas: [],
    status: '',
  };
};

const selecionar = (_: Event, row: Aula) => {
  selecionada.value = row;
  aula.value = { ...row };
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

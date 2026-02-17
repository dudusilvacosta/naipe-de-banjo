<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Donwloads" icon="download" />
    </q-breadcrumbs>
    <div class="pesquisa">
      <q-input v-model="pesquisa.nome" label="Música" />
      <q-input v-model="pesquisa.autor" label="Autor" />
      <q-input v-model="pesquisa.tom" label="Tom" />
      <q-select v-model="pesquisa.genero" :options="generos" label="Gênero" class="select" />
      <q-select
        v-model="pesquisa.repertorio"
        :options="repertorio"
        label="Repertório"
        class="select"
      />
      <q-select v-model="pesquisa.repertorio" :options="status" label="Status" class="select" />
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

        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-badge outline :color="props.row.status ? 'green' : 'red'">
              {{ props.row.status ? 'Ativo' : 'Inativo' }}
            </q-badge>
          </q-td>
        </template>
      </q-table>
    </div>
  </div>

  <q-dialog v-model="modal">
    <q-card style="width: 100%">
      <q-card-section>
        <div class="text-h6">{{ musica.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="musica.nome" label="Música *" lazy-rules />

          <q-input v-model="musica.tom" label="Tom" hint="" lazy-rules />

          <q-input v-model="musica.autor" label="Autor" hint="" lazy-rules />

          <q-select v-model="musica.genero" :options="generos" label="Gênero" />

          <q-select v-model="musica.repertorio" :options="repertorio" label="Repertório" />

          <q-radio left-label v-model="musica.status" :val="true" label="Status Ativo" />
          <q-radio left-label v-model="musica.status" :val="false" label="Status Inativo" />

          <q-editor v-model="musica.cifra" min-height="5rem" />

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
const generos = ['Boi', 'Quadrilha', 'Carimbó'];
const repertorio = ['Roda', 'Cortejo', 'Extra'];
const status = ['Ativo', 'Inativo'];
const selecionada = ref<Musica | null>(null);

interface Musica {
  id: number | null;
  nome: string;
  tom: string;
  autor: string;
  genero: string;
  repertorio: string;
  status: boolean;
  cifra: string;
}
const pesquisa = ref({
  nome: '',
  tom: '',
  autor: '',
  genero: '',
  repertorio: '',
  status: true,
});
const musica = ref<Musica>({
  id: null,
  nome: '',
  tom: '',
  autor: '',
  genero: '',
  repertorio: '',
  status: false,
  cifra: '',
});
const columns: QTableColumn<Musica>[] = [
  {
    name: 'id',
    label: '#',
    field: 'id',
    align: 'center',
    sortable: false,
  },
  {
    name: 'nome',
    label: 'Música',
    field: 'nome',
    align: 'left',
    sortable: true,
  },
  {
    name: 'autor',
    label: 'Autor',
    field: 'autor',
    align: 'left',
    sortable: true,
  },
  {
    name: 'tom',
    label: 'Tom',
    field: 'tom',
    align: 'left',
    sortable: true,
  },
  {
    name: 'genero',
    label: 'Gênero',
    field: 'genero',
    align: 'left',
    sortable: true,
  },
  {
    name: 'repertorio',
    label: 'Repertório',
    field: 'repertorio',
    align: 'left',
    sortable: false,
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    align: 'left',
    sortable: true,
  },
];

const rows: Musica[] = [
  {
    id: 1,
    nome: 'inicias BP',
    autor: 'Arraial do Pavulagem',
    cifra: `<p>Am</p>
<p>Eu venho da fortaleza</p>
<p>F</p>
<p>Colhendo flor no balaio</p>
<p>C</p>
<p>Vou enfeitar o rosário</p>
<p>G                   E7                  Am</p>
<p>Pra quando for mês de maio</p>
<p>F          G                   Am</p>
<p>Deixar bonito meu boi</p>
<p>Am</p>
<p>Bordei no couro esse ano</p>
<p>F</p>
<p>Com linha fina de prata</p>
<p>C</p>
<p>A estrela d'alva e a lua</p>
<p>G                E7               Am</p>
<p>Pro astro rei... luz divina</p>
<p>F          G             Am</p>
<p>Fiz um ponteio dourado</p>
<p>G                                       C</p>
<p>É d'ouro, prata e brilhante</p>
<p>G                C</p>
<p>As inicias BP</p>`,
    tom: 'Am',
    genero: 'Boi',
    repertorio: 'Cortejo',
    status: true,
  },
  {
    id: 2,
    nome: 'Tempo Perdido',
    autor: 'Legião Urbana',
    cifra: 'C G Am F ...',
    tom: 'C',
    genero: 'Rock',
    repertorio: 'Roda',
    status: false,
  },
  {
    id: 3,
    nome: 'Trem Bala',
    autor: 'Ana Vilela',
    cifra: 'G D Em C ...',
    tom: 'G',
    genero: 'MPB',
    repertorio: 'Cortejo',
    status: false,
  },
];

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const alertEditar = () => {
  if (!musica.value.id) {
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
  if (!musica.value.id) {
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
  if (musica.value.id) {
    editar();
  } else {
    salvar();
  }
};

const onReset = () => {
  musica.value = {
    id: null,
    nome: '',
    tom: '',
    autor: '',
    genero: '',
    repertorio: '',
    status: false,
    cifra: '',
  };
};

const selecionar = (_: Event, row: Musica) => {
  selecionada.value = row;
  musica.value = { ...row };
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
  gap: 1rem;
}
.select {
  min-width: 150px;
}
</style>

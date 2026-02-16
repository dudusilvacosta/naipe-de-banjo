<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
    </q-breadcrumbs>
    <div class="pesquisa">
      <q-input v-model="pesquisa.nome" label="Música" />
      <q-input v-model="pesquisa.autor" label="Autor" />
      <q-input v-model="pesquisa.tom" label="Tom" />
      <q-input v-model="pesquisa.genero" label="Gênero" />
      <q-input v-model="pesquisa.repertorio" label="Repertório" />
      <q-toggle v-model="pesquisa.status" label="Status" />
    </div>
    <q-btn color="primary" label="Pesquisar" size="sm" class="q-mt-sm" />
    <div class="q-mt-md btns">
      <q-btn-group push>
        <q-btn size="sm" label="Nova" icon="add" @click="alertSalvar" />
        <q-btn size="sm" label="Editar" icon="edit" @click="alertEditar" />
        <q-btn size="sm" label="Apagar" icon="delete" @click="apagar" />
      </q-btn-group>
    </div>
    <div class="q-mt-md">
      <q-table title="" :rows="rows" :columns="columns" row-key="id" @row-click="selecionar">
        <template v-slot:body-cell-id="props">
          <q-td :props="props">
            <q-checkbox
              :model-value="selectedMusica?.id === props.row.id"
              @update:model-value="() => selecionar(null as any, props.row)"
              @click.stop
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>

  <q-dialog v-model="modal">
    <q-card style="width: 100%">
      <q-card-section>
        <div class="text-h6">{{ musica.id ? 'Editar' : 'Nova' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="musica.nome" label="Música *" lazy-rules />

          <q-input v-model="musica.tom" label="Tom" hint="" lazy-rules />

          <q-input v-model="musica.autor" label="Autor" hint="" lazy-rules />

          <q-select v-model="musica.genero" :options="generos" label="Gênero" />

          <q-select v-model="musica.repertorio" :options="repertorio" label="Repertório" />

          <q-toggle v-model="musica.status" label="Status" />

          <q-editor v-model="musica.cifra" min-height="5rem" />

          <div>
            <q-btn label="Salvar" type="submit" color="primary" />
            <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" v-close-popup />
      </q-card-actions>
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
const generos = ['Bois', 'Quadrilha', 'Carimbó'];
const repertorio = ['Roda', 'Cortejo'];
const selectedMusica = ref<Musica | null>(null);

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
  status: false,
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
    label: '',
    field: 'id',
    align: 'left',
    sortable: true,
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

const rows: Musica[] = [
  {
    id: 1,
    nome: 'Oceans',
    autor: 'Hillsong United',
    cifra: `Am

Eu venho da fortaleza

F

Colhendo flor no balaio

C

Vou enfeitar o rosário

G                   E7                  Am

Pra quando for mês de maio

F          G                   Am

Deixar bonito meu boi

Am

Bordei no couro esse ano

F

Com linha fina de prata

C

A estrela d'alva e a lua

G                E7               Am

Pro astro rei... luz divina

F          G             Am

Fiz um ponteio dourado

G                                       C

É d'ouro, prata e brilhante

G                C

As inicias BP`,
    tom: 'Am',
    genero: 'Gospel',
    repertorio: 'Roda',
    status: false,
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
  selectedMusica.value = null;
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
  selectedMusica.value = row;
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
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>

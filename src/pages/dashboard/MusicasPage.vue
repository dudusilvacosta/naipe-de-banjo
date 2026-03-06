<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
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
        <q-select v-model="pesquisa.status" :options="status" label="Status" class="select" />
      </div>
    </q-expansion-item>
    <div class="q-mt-md" style="margin: 2rem 0">
      <q-btn-group spread>
        <q-btn color="primary" icon="search" @click="buscaMusicas">
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
        <div class="text-h6">{{ musica.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="musica.nome" label="Música *" lazy-rules />

          <q-input v-model="musica.tom" label="Tom" hint="" lazy-rules />

          <q-input v-model="musica.autor" label="Autor" hint="" lazy-rules />

          <q-select v-model="musica.genero" :options="generos" label="Gênero" />

          <q-select v-model="musica.repertorio" :options="repertorio" label="Repertório" />

          <q-select v-model="musica.status" :options="status" label="Status" class="select" />

          <q-editor class="cifra" v-model="musica.cifra" />

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

interface Musica {
  id: number | null;
  nome: string;
  tom: string;
  autor: string;
  genero: string;
  repertorio: string;
  status: string;
  cifra: string;
}

const columns: QTableColumn<Musica>[] = [
  { name: 'id', label: '#', field: 'id', align: 'center', sortable: false },
  { name: 'nome', label: 'Música', field: 'nome', align: 'left', sortable: true },
  { name: 'autor', label: 'Autor', field: 'autor', align: 'left', sortable: true },
  { name: 'tom', label: 'Tom', field: 'tom', align: 'left', sortable: true },
  { name: 'genero', label: 'Gênero', field: 'genero', align: 'left', sortable: true },
  { name: 'repertorio', label: 'Repertório', field: 'repertorio', align: 'left', sortable: false },
  { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
];

const showProgress = ref(true);
const modal = ref(false);
const rows = ref<Musica[]>([]);
const selecionada = ref<Musica | null>(null);
const generos = ['Boi', 'Quadrilha', 'Carimbó'];
const repertorio = ['Roda', 'Cortejo', 'Extra'];
const status = ['Ativo', 'Inativo'];

const pesquisa = ref({
  nome: '',
  tom: '',
  autor: '',
  genero: '',
  repertorio: '',
  status: '',
});

const musica = ref<Musica>({
  id: null,
  nome: '',
  tom: '',
  autor: '',
  genero: '',
  repertorio: '',
  status: '',
  cifra: '',
});

const onSubmit = () => {
  if (musica.value.id) {
    void editar();
  } else {
    void salvar();
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
    status: '',
    cifra: '',
  };
};

const selecionar = (_: Event, row: Musica) => {
  selecionada.value = row;
  musica.value = { ...row };
};

async function buscaMusicas() {
  showProgress.value = true;

  let query = supabase.from('musicas').select('*');

  if (pesquisa.value.nome) {
    query = query.ilike('nome', `%${pesquisa.value.nome}%`);
  }

  if (pesquisa.value.autor) {
    query = query.ilike('autor', `%${pesquisa.value.autor}%`);
  }

  if (pesquisa.value.tom) {
    query = query.eq('tom', pesquisa.value.tom);
  }

  if (pesquisa.value.genero) {
    query = query.eq('genero', pesquisa.value.genero);
  }

  if (pesquisa.value.repertorio) {
    query = query.eq('repertorio', pesquisa.value.repertorio);
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

const salvar = async () => {
  const { error } = await supabase.from('musicas').insert([
    {
      nome: musica.value.nome,
      tom: musica.value.tom,
      autor: musica.value.autor,
      genero: musica.value.genero,
      repertorio: musica.value.repertorio,
      status: musica.value.status,
      cifra: musica.value.cifra,
    },
  ]);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao salvar música',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Música salva com sucesso',
  });

  modal.value = false;
  await buscaMusicas();
  onReset();
};

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const editar = async () => {
  if (!selecionada.value) return;

  const { error } = await supabase
    .from('musicas')
    .update({
      nome: musica.value.nome,
      tom: musica.value.tom,
      autor: musica.value.autor,
      genero: musica.value.genero,
      repertorio: musica.value.repertorio,
      status: musica.value.status,
      cifra: musica.value.cifra,
    })
    .eq('id', selecionada.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao atualizar música',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Música atualizada',
  });

  modal.value = false;
  await buscaMusicas();
};

const alertEditar = () => {
  if (!selecionada.value) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha uma música',
    });
    return;
  }

  modal.value = true;
};

const apagar = async () => {
  if (!selecionada.value) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha uma música',
    });
    return;
  }

  if (!confirm('Tem certeza que deseja apagar?')) return;

  const { error } = await supabase.from('musicas').delete().eq('id', selecionada.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao apagar música',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Música removida',
  });

  await buscaMusicas();
  onReset();
};

onMounted(() => {
  void buscaMusicas();
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

.cifra :deep(p) {
  margin: 0;
  padding: 0;
}
</style>

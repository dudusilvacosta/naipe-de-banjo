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
        <q-btn color="primary" icon="search">
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
import { useTimeout } from 'quasar';
import type { QTableColumn } from 'quasar';
import { supabase } from 'src/boot/supabase';

const modal = ref(false);
const showProgress = ref(true);
const { registerTimeout } = useTimeout();
const status = ['Ativo', 'Inativo'];
const selecionada = ref<Aula | null>(null);

interface Aula {
  id: number | null;
  nome: string;
  videos: unknown[];
  status: string;
}

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

const columns: QTableColumn<Aula>[] = [
  { name: 'id', label: '#', field: 'id', align: 'center', sortable: false },
  { name: 'nome', label: 'Aula', field: 'nome', align: 'left', sortable: true },
  { name: 'videos', label: 'Nº Vídeos', field: 'videos', align: 'left', sortable: true },
  { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
];

const aulas = ref<Aula[]>([]);
const rows = computed(() => aulas.value);

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const alertEditar = () => {
  if (!selecionada.value?.id) {
    window.alert('Escolha um álbum');
    return;
  }
  modal.value = true;
};

const salvar = () => {
  console.log('Salvar', aula.value);
};

const editar = () => {
  console.log('Editar', aula.value);
};

const apagar = () => {
  if (!selecionada.value?.id) {
    window.alert('Escolha um álbum');
    return;
  }
  if (confirm('Tem certeza que deseja apagar?')) {
    console.log('Item apagado!', selecionada.value);
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
  aula.value = { id: null, nome: '', videos: [], status: '' };
};

const selecionar = (_: Event | null, row: Aula) => {
  selecionada.value = row;
  aula.value = { ...row };
};

async function buscaAulas() {
  const { data, error } = await supabase
    .from('aulas')
    .select('*')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  aulas.value = (data as Record<string, unknown>[]).map((item: Record<string, unknown>) => ({
    id: item.id as number,
    nome: item.nome as string,
    videos: (item.videos as unknown[]) || [],
    status: item.status as string,
  }));
}

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000);

  void buscaAulas();
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

<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Vídeos" icon="video_library" />
    </q-breadcrumbs>
    <div class="pesquisa">
      <q-input v-model="pesquisa.video" label="Vídeo" />
      <q-input v-model="pesquisa.id_youtube" label="ID" />
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
    <q-card style="width: 100%">
      <q-card-section>
        <div class="text-h6">{{ video.id ? 'Editar' : 'Cadastrar' }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input v-model="video.video" label="Vídeo *" lazy-rules />

          <q-input v-model="video.id_youtube" label="ID" hint="" lazy-rules />
          <q-select v-model="video.status" :options="status" label="Status" class="select" />

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
import { supabase } from 'src/boot/supabase';

const modal = ref(false);
const showProgress = ref(true);
const { registerTimeout } = useTimeout();
const status = ['Ativo', 'Inativo'];
const selecionada = ref<Video | null>(null);

interface Video {
  id: number | null;
  video: string;
  id_youtube: string;
  status: string;
}
const pesquisa = ref({
  video: '',
  id_youtube: '',
  status: '',
});
const video = ref<Video>({
  id: null,
  video: '',
  id_youtube: '',
  status: '',
});
const columns: QTableColumn<Video>[] = [
  {
    name: 'id',
    label: '#',
    field: 'id',
    align: 'center',
    sortable: false,
  },
  {
    name: 'video',
    label: 'Vídeo',
    field: 'video',
    align: 'left',
    sortable: true,
  },
  {
    name: 'id_youtube',
    label: 'ID',
    field: 'id_youtube',
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

const rows = ref<Video[]>([]);

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const alertEditar = () => {
  if (!video.value.id) {
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
  if (!video.value.id) {
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
  if (video.value.id) {
    editar();
  } else {
    salvar();
  }
};

const onReset = () => {
  video.value = {
    id: null,
    video: '',
    id_youtube: '',
    status: '',
  };
};

const selecionar = (_: Event, row: Video) => {
  selecionada.value = row;
  video.value = { ...row };
};

async function buscaVideos() {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  rows.value = data;
}

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms

  void buscaVideos();
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

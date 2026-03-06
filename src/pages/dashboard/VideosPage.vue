<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="max-width: 1200px; margin: 0 auto">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Vídeos" icon="video_library" />
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
        <q-input v-model="pesquisa.video" label="Vídeo" />
        <q-input v-model="pesquisa.id_youtube" label="ID" />
        <q-select v-model="pesquisa.status" :options="status" label="Status" class="select" />
      </div>
    </q-expansion-item>
    <div class="q-mt-md" style="margin: 2rem 0">
      <q-btn-group spread>
        <q-btn color="primary" icon="search" @click="buscaVideos">
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
import { Notify } from 'quasar';
import type { QTableColumn } from 'quasar';
import { supabase } from 'src/boot/supabase';

interface Video {
  id: number | null;
  video: string;
  id_youtube: string;
  status: string;
}

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

const showProgress = ref(true);
const modal = ref(false);
const rows = ref<Video[]>([]);
const selecionada = ref<Video | null>(null);
const status = ['Ativo', 'Inativo'];

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

const onSubmit = () => {
  if (video.value.id) {
    void editar();
  } else {
    void salvar();
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
  let query = supabase.from('videos').select('*').order('video', { ascending: true });

  if (pesquisa.value.video) {
    query = query.ilike('video', `%${pesquisa.value.video}%`);
  }

  if (pesquisa.value.id_youtube) {
    query = query.ilike('id_youtube', `%${pesquisa.value.id_youtube}%`);
  }

  if (pesquisa.value.status) {
    query = query.eq('status', pesquisa.value.status);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    return;
  }

  rows.value = data as Video[];
}

const salvar = async () => {
  const { error } = await supabase.from('videos').insert([
    {
      video: video.value.video,
      id_youtube: video.value.id_youtube,
      status: video.value.status,
    },
  ]);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao salvar vídeo',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Vídeo criado com sucesso',
  });

  modal.value = false;
  await buscaVideos();
  onReset();
};

const alertSalvar = () => {
  onReset();
  selecionada.value = null;
  modal.value = true;
};

const editar = async () => {
  if (!video.value.id) return;

  const { error } = await supabase
    .from('videos')
    .update({
      video: video.value.video,
      id_youtube: video.value.id_youtube,
      status: video.value.status,
    })
    .eq('id', video.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao atualizar vídeo',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Vídeo atualizado',
  });

  modal.value = false;
  await buscaVideos();
};

const alertEditar = () => {
  if (!video.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha um vídeo',
    });
    return;
  }
  modal.value = true;
};

const apagar = async () => {
  if (!video.value.id) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Escolha um vídeo',
    });
    return;
  }

  if (!confirm('Tem certeza que deseja apagar?')) return;

  const { error } = await supabase.from('videos').delete().eq('id', video.value.id);

  if (error) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Erro ao apagar vídeo',
    });
    console.log(error);
    return;
  }

  Notify.create({
    type: 'positive',
    position: 'top',
    message: 'Vídeo removido',
  });

  await buscaVideos();
  onReset();
};

onMounted(() => {
  void buscaVideos();
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

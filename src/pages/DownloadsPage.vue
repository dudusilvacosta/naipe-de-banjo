<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Downloads" icon="download" />
    </q-breadcrumbs>
    <div class="q-gutter-sm">
      <div class="text-h6">
        <div v-for="(download, index) in downloads" :key="index">
          <a
            :href="`https://drive.google.com/file/d/${download.id_drive}/view?usp=drive_link`"
            target="_blank"
            rel="noopener noreferrer"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            {{ download.nome }}
          </a>

          <q-separator />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from 'src/boot/supabase';

interface Download {
  id: number | null;
  nome: string;
  id_drive: string;
  status: string;
}

const showProgress = ref(true);
const downloads = ref<Download[]>([]);

async function buscaDownloads() {
  const { data, error } = await supabase
    .from('downloads')
    .select('*')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  downloads.value = data;
}

onMounted(() => {
  void buscaDownloads();
  showProgress.value = false;
});
</script>

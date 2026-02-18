<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Vídeos" icon="smart_display" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-intersection class="example-item" v-for="(value, index) in videos" :key="index">
        <q-card flat bordered class="q-ma-sm">
          <q-video :ratio="16 / 9" :src="`https://www.youtube.com/embed/${value.id_youtube}`" />
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from 'src/boot/supabase';

interface Video {
  id: number | null;
  video: string;
  id_youtube: string;
  status: string;
}

const showProgress = ref(true);
const videos = ref<Video[]>([]);

async function buscaVideos() {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  videos.value = data;
}

onMounted(() => {
  void buscaVideos();
  showProgress.value = false;
});
</script>

<style lang="sass" scoped>
.example-item
  width: 290px

@media screen and (max-width: 600px)
  .example-item
    width: 100%
</style>

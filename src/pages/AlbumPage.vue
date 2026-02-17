<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Fotos" icon="image" />
      <q-breadcrumbs-el label="Círiio 2025" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        thumbnails
        infinite
        style="width: 100vw; max-width: 800px"
      >
        <q-carousel-slide
          v-for="(value, index) in fotos"
          :key="index"
          :name="value"
          :img-src="`https://raw.githubusercontent.com/dudusilvacosta/fotos-naipe-banjo/main/${pasta_git}/${value}`"
        />
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimeout } from 'quasar';
import { supabase } from 'src/boot/supabase';
import { useRoute } from 'vue-router';

const route = useRoute();
const showProgress = ref(true);
const { registerTimeout } = useTimeout();
const slide = ref('1.jpeg');
const fotos = ref<object[]>([]);
const album = ref('');
const ano = ref('');
const pasta_git = ref('');

async function buscaAlbuns() {
  const { data, error } = await supabase
    .from('albuns')
    .select('*')
    .eq('nome', album.value)
    .eq('ano', ano.value)
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }
  pasta_git.value = data[0].pasta_git;
  fotos.value = data[0].fotos;
}

onMounted(() => {
  album.value = route.params.album as string;
  ano.value = route.params.ano as string;

  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms

  void buscaAlbuns();
});
</script>

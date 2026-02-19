<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Aulas" icon="school" />
      <q-breadcrumbs-el :label="aux" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-intersection class="example-item" v-for="(value, index) in aula.videos" :key="index">
        <q-card flat bordered class="q-ma-sm">
          <q-video :ratio="16 / 9" :src="`https://www.youtube.com/embed/${value}`" />
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from 'src/boot/supabase';
import { useRoute } from 'vue-router';

interface Aula {
  id: number | null;
  nome: string;
  videos: unknown[];
  status: string;
}

const route = useRoute();
const aux = ref('');

const showProgress = ref(true);
const aula = ref<Aula>({
  id: null,
  nome: '',
  videos: [],
  status: '',
});

async function buscaAulas() {
  const { data, error } = await supabase
    .from('aulas')
    .select('*')
    .eq('nome', aux.value)
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  aula.value = data[0];
}

onMounted(() => {
  aux.value = route.params.nome as string;
  void buscaAulas();
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

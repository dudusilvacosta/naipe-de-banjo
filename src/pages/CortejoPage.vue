<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Cortejo" />
    </q-breadcrumbs>
    <div v-for="(musicas, genero) in generosCifras" :key="genero">
      <p class="text-body1">{{ genero }}</p>
      <q-list padding bordered class="rounded-borders">
        <q-expansion-item
          v-for="(musica, index) in musicas"
          :key="index"
          dense
          dense-toggle
          expand-separator
          :label="musica.nome + ' - ' + musica.tom"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section class="q-pt-none">
              <p class="autor">{{ musica.autor }}</p>
              <div v-html="musica.cifra"></div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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

const showProgress = ref(true);
const generosCifras = ref<Record<string, Musica[]>>({});

async function carregarCifras() {
  const { data, error } = await supabase
    .from('musicas')
    .select('*')
    .eq('repertorio', 'Cortejo')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  // Agrupa por gênero
  generosCifras.value = (data as Musica[]).reduce(
    (acc, musica) => {
      if (!acc[musica.genero]) acc[musica.genero] = [];
      acc[musica.genero]!.push(musica);
      return acc;
    },
    {} as Record<string, Musica[]>,
  );
}

onMounted(async () => {
  await carregarCifras();
  showProgress.value = false;
});
</script>

<style scoped>
.autor {
  color: #666;
  font-style: italic;
}

p {
  margin: 0;
  padding: 0;
}
</style>

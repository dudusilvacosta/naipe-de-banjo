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
          header-class="text-primary"
        >
          <template v-slot:header>
            <div class="row items-center full-width no-wrap">
              <div class="col">{{ musica.nome }} - {{ musica.tom }}</div>

              <div class="row items-center q-gutter-xs">
                <q-btn
                  flat
                  round
                  dense
                  :icon="favoritos.includes(musica.id ?? -1) ? 'favorite' : 'favorite_border'"
                  @click.stop="favoritar(musica.id)"
                />
              </div>
            </div>
          </template>

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
import { useRoute } from 'vue-router';

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

const route = useRoute();
const showProgress = ref(true);
const generosCifras = ref<Record<string, Musica[]>>({});
const repertorio = ref('');
const favoritos = ref<number[]>([]);

function favoritar(id: number | null) {
  if (id === null) return;
  const index = favoritos.value.indexOf(id);
  let novoArray: number[];
  if (index === -1) {
    novoArray = [...favoritos.value, id];
  } else {
    novoArray = favoritos.value.filter((favId) => favId !== id);
  }
  favoritos.value = novoArray;
  localStorage.setItem('musicasFavoritas', JSON.stringify(novoArray));
}

async function carregarCifras() {
  const { data, error } = await supabase
    .from('musicas')
    .select('*')
    .eq('repertorio', repertorio.value);

  if (error) {
    console.log(error);
    return;
  }

  const agrupado = (data as Musica[]).reduce(
    (acc, musica) => {
      if (!acc[musica.genero]) acc[musica.genero] = [];
      acc[musica.genero]!.push(musica);
      return acc;
    },
    {} as Record<string, Musica[]>,
  );

  const ordenado: Record<string, Musica[]> = {};

  Object.keys(agrupado)
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })) // gêneros
    .forEach((genero) => {
      ordenado[genero] = agrupado[genero]!.sort(
        (a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }), // músicas
      );
    });

  generosCifras.value = ordenado;
}

onMounted(async () => {
  repertorio.value = route.params.repertorio as string;
  await carregarCifras();
  const salvos = localStorage.getItem('musicasFavoritas');
  if (salvos) {
    favoritos.value = JSON.parse(salvos);
  }
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

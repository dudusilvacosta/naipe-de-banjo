<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Cortejo" />
    </q-breadcrumbs>
    <!-- ============================================================================================================ -->
    <p class="text-body1">Boi</p>
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        v-for="(value, index) in boiCifras"
        :key="index"
        dense
        dense-toggle
        expand-separator
        :label="value.nome + ' - ' + value.tom"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">{{ value.autor }}</p>
            <div v-html="value.cifra"></div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <!-- ============================================================================================================ -->
    <p class="text-body1">Carimbó</p>
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        v-for="(value, index) in carimboCifras"
        :key="index"
        dense
        dense-toggle
        expand-separator
        :label="value.nome + ' - ' + value.tom"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">{{ value.autor }}</p>
            <div v-html="value.cifra"></div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <!-- ============================================================================================================ -->
    <p class="text-body1">Quadrilha</p>
    <q-list padding bordered class="rounded-borders">
      <q-expansion-item
        v-for="(value, index) in quadrilhaCifras"
        :key="index"
        dense
        dense-toggle
        expand-separator
        :label="value.nome + ' - ' + value.tom"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">{{ value.autor }}</p>
            <div v-html="value.cifra"></div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <!-- ============================================================================================================ -->
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
const boiCifras = ref<Musica[]>([]);
const carimboCifras = ref<Musica[]>([]);
const quadrilhaCifras = ref<Musica[]>([]);

async function cifrasBoi() {
  const { data, error } = await supabase
    .from('musicas')
    .select('*')
    .eq('repertorio', 'Cortejo')
    .eq('genero', 'Boi')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  boiCifras.value = data as Musica[];
}
async function cifrasCarimbo() {
  const { data, error } = await supabase
    .from('musicas')
    .select('*')
    .eq('repertorio', 'Cortejo')
    .eq('genero', 'Carimbó')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  carimboCifras.value = data as Musica[];
}
async function cifrasQuadrilha() {
  const { data, error } = await supabase
    .from('musicas')
    .select('*')
    .eq('repertorio', 'Cortejo')
    .eq('genero', 'Quadrilha')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  quadrilhaCifras.value = data as Musica[];
}

onMounted(() => {
  void cifrasBoi();
  void cifrasCarimbo();
  void cifrasQuadrilha();
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

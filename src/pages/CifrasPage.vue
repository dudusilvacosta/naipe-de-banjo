<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
    </q-breadcrumbs>
    <div class="categorias">
      <div class="q-gutter-sm">
        <div class="text-h6">
          <div v-for="(value, index) in cifras" :key="index">
            <router-link
              :to="`/cifras/${value.repertorio}`"
              class="q-item q-item-type row no-wrap"
              style="text-decoration: none; color: #0a66c2"
            >
              {{ value.repertorio }}
            </router-link>

            <q-separator />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from 'src/boot/supabase';

interface Link {
  repertorio: string;
}

const showProgress = ref(true);
const cifras = ref<Link[]>([]);

async function buscaCifras() {
  const { data, error } = await supabase
    .from('musicas')
    .select('repertorio')
    .order('repertorio', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  // Cria um mapa para filtrar duplicados por repertorio
  const unicos = Array.from(new Map(data.map((item) => [item.repertorio, item])).values());

  cifras.value = unicos;
}

onMounted(() => {
  void buscaCifras();
  showProgress.value = false;
});
</script>

<style scoped>
.categorias {
  position: relative;
  height: calc(100svh - 120px);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>

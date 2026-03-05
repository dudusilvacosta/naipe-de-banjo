<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Aulas" icon="school" />
    </q-breadcrumbs>

    <div class="q-gutter-sm">
      <div class="text-h6">
        <div v-for="(value, index) in aulas" :key="index">
          <router-link
            :to="`/aula/${value.nome}`"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            {{ value.nome }}
          </router-link>

          <q-separator />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from 'src/boot/supabase';

interface Aula {
  id: number | null;
  nome: string;
  id_youtube: string;
  status: string;
}

const showProgress = ref(true);
const aulas = ref<Aula[]>([]);

async function buscaAulas() {
  const { data, error } = await supabase
    .from('aulas')
    .select('*')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  aulas.value = data;
}

onMounted(() => {
  void buscaAulas();
  showProgress.value = false;
});
</script>

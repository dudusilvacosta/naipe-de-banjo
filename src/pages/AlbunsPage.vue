<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Álbuns" icon="image" />
    </q-breadcrumbs>

    <div class="q-gutter-sm">
      <div class="text-h6">
        <div v-for="(link, index) in links" :key="index">
          <router-link
            :to="`/album/${link.album}`"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            {{ link.album }}
          </router-link>

          <q-separator />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimeout } from 'quasar';
import { supabase } from 'src/boot/supabase';

const showProgress = ref(true);
const { registerTimeout } = useTimeout();
type FotoLink = { album: string };
const links = ref<FotoLink[]>([]);

async function buscaAlbuns() {
  const { data, error } = await supabase
    .from('albuns')
    .select('*')

    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  if (!data || data.length === 0) {
    links.value = [];
    return;
  }

  links.value = data.map((row) => ({
    album: row.nome,
  }));
}

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000);

  void buscaAlbuns();
});
</script>

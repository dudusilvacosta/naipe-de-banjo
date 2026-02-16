<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md home">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Boas-Vindas" icon="celebration" />
    </q-breadcrumbs>
    <p>Olá! É uma alegria ter você aqui.</p>

    <p>
      Este site foi desenvolvido especialmente para apoiar os músicos do naipe de banjo do Batalhão
      da Estrela. O objetivo é oferecer conteúdos úteis e práticos que possam contribuir com seu
      aprendizado e sua prática musical. Aproveite ao máximo!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimeout } from 'quasar';

const showProgress = ref(true);
const { registerTimeout } = useTimeout();

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms
});
</script>

<style scoped>
.home {
  height: calc(100svh - 75px);
  overflow: hidden;
}
</style>

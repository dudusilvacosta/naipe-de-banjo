<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="ibg q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Boas-Vindas" icon="celebration" />
    </q-breadcrumbs>
    <p>É muito bom ver você no site do naipe de banjo do Batalhão da Estrela!</p>
    <p>
      Aqui você encontra um pouco da história do banjo no batalhão, fotos, vídeos, cifras de
      músicas, aulas de teoria musical, links para download e também fica por dentro de todos os
      recados importantes.
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
.ibg {
  background-color: #ffffff;
}
</style>

<style scoped>
.ibg {
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  height: calc(100vh - 51px);
  background-image: url('../assets/banjonotas.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom center;
}
</style>

<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Boas-Vindas" icon="celebration" />
    </q-breadcrumbs>
    <p>
      É muito bom ter você aqui no site feito com carinho para o naipe de banjo do Batalhão da
      Estrela!
    </p>

    <p>
      Aqui você encontra um pouco da história do banjo no batalhão, fotos, vídeos, cifras das
      músicas, aulas de teoria musical, links para download e os recados mais importantes.
    </p>

    <p>
      Este site foi criado como uma ferramenta de apoio para os músicos do naipe de banjo e também
      para quem admira esse trabalho. Esperamos que você aproveite o conteúdo e que ele seja útil
      para você!
    </p>
  </div>
  <img src="../assets/banjonotas.png" alt="" class="img" />
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
.img {
  width: 100%;
  max-height: 50vh;
  position: fixed;
  bottom: 15px;
}
</style>

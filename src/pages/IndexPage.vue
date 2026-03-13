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
      Este sistema é uma plataforma digital gratuita criada para apoiar o estudo musical dos
      banjoístas do Batalhão da Estrela. A ferramenta reúne materiais educativos, cifras musicais e
      conteúdos culturais relacionados ao repertório do grupo, facilitando o acesso ao conhecimento
      e à prática do instrumento.
    </p>

    <p>A plataforma foi criada com o objetivo de:</p>

    <ul>
      <li>facilitar o acesso ao repertório musical utilizado pelo batalhão</li>
      <li>organizar materiais de estudo para os banjoístas</li>
      <li>apoiar iniciantes no aprendizado do instrumento</li>
      <li>preservar e divulgar ritmos tradicionais paraenses</li>
      <li>utilizar tecnologias digitais para fortalecer a aprendizagem musical</li>
    </ul>

    <p>
      Todo o sistema é totalmente gratuito, não possui propagandas e não cobra qualquer tipo de
      valor dos usuários, sendo uma iniciativa voltada exclusivamente ao apoio cultural, educativo e
      à valorização da música tradicional.
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
  }, 1000);
});
</script>

<style scoped>
.home {
  height: calc(100svh - 75px);
  overflow: hidden;
}
</style>

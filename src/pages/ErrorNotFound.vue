<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div>
        <div class="text-h6 text-blue text-weight-bolder">Você digitou a URL errada!</div>
        <video ref="videoRef" autoplay loop muted playsinline controls height="400">
          <source src="../assets/404.mp4" type="video/mp4" />
        </video>
      </div>

      <q-btn class="q-mt-xl" text-color="blue" unelevated to="/" label="Ir para o início" no-caps />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  // toca o vídeo muted para garantir autoplay
  videoRef.value?.play().catch(() => {});

  // após 3 segundos tenta remover o muted e ativar o som
  setTimeout(() => {
    if (videoRef.value) {
      videoRef.value.muted = false;
      videoRef.value.volume = 1;
      videoRef.value.play().catch(() => {
        // pode falhar se o navegador bloquear autoplay com som
      });
    }
  }, 1000);
});
</script>

<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div>
        <div class="text-subtitle1 text-blue text-weight-bolder">
          Você não disse a palavrinha mágica!
        </div>
        <video autoplay loop playsinline height="360">
          <source src="../assets/404.mp4" type="video/mp4" />
        </video>
      </div>

      <q-btn class="q-mt-xl" text-color="blue" unelevated to="/" label="Ir para o início" no-caps />
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

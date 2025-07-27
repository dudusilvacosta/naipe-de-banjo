<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pl-md q-pt-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
    </q-breadcrumbs>
    <div class="categorias">
      <div class="q-gutter-sm">
        <div class="text-h6">
          <div class="text-h6">
            <router-link
              to="/cifras/boi"
              class="q-item q-item-type row no-wrap"
              style="text-decoration: none; color: #0a66c2"
            >
              Boi
            </router-link>
          </div>

          <q-separator />

          <router-link
            to="/cifras/carimbo"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Carimbó
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/cifras/quadrilha"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Quadrilha
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/cifras/roda"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Roda Cantada
          </router-link>
        </div>
      </div>
    </div>
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
.categorias {
  position: relative;
  height: calc(100svh - 120px);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.categorias::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  background-image: url('../assets/cifras.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  pointer-events: none;
  z-index: 0;
}
</style>

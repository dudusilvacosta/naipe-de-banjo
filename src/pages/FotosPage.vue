<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Fotos" icon="image" />
    </q-breadcrumbs>

    <div class="categorias">
      <div class="q-gutter-sm">
        <div class="text-h6">
          <router-link
            to="/fotos/junho25"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Junho 2025
          </router-link>

          <q-separator />

          <router-link
            to="/fotos/cirio24"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Círio 2024
          </router-link>

          <q-separator />

          <router-link
            to="/fotos/junho24"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Junho 2024
          </router-link>

          <q-separator />

          <router-link
            to="/fotos/cirio23"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Círio 2023
          </router-link>

          <!-- <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/junho23"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Junho 2023
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/cirio19"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Círio 2019
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/junho19"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Junho 2019
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/cirio18"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Círio 2018
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/junho18"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Junho 2018
          </router-link>
        </div> -->

          <q-separator />
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
  width: 60%;
  height: 100%;
  aspect-ratio: 1 / 1;
  background-image: url('../assets/notas.png');
  background-repeat: repeat;
  background-size: contain;
  background-position: top right;
  pointer-events: none;
  z-index: 0;
}
</style>

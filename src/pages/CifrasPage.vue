<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
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

        <!-- <div class="text-h6">
        <router-link
          to="/cifras/retumbao"
          class="q-item q-item-type row no-wrap"
          style="text-decoration: none; color: #0a66c2"
        >
          Retumbão
        </router-link>
      </div>

      <q-separator /> -->

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
  height: calc(100svh - 142px);
  display: flex;
  flex-wrap: wrap;
}
</style>

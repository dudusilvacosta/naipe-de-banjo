<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md ibg">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Aulas" icon="school" />
    </q-breadcrumbs>

    <div class="categorias">
      <div class="q-gutter-sm">
        <div class="text-h6">
          <router-link
            to="/aulas/teoria-musical"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Teoria Musical
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/aulas/acordes-cifras"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Acordes e Cifras
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/cifras/quadrilha"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Graus e Harmonia
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/aulas/carimbo-cifrado"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none; color: #0a66c2"
          >
            Carimbó Cifrado
          </router-link>
        </div>

        <q-separator />
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
.ibg {
  background-image: url('../assets/fundoaulas.png');
  background-repeat: no-repeat;
  background-position: right center;
}

.categorias {
  height: calc(100svh - 142px);
  display: flex;
  flex-wrap: wrap;
}
</style>

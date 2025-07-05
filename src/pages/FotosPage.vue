<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pl-md q-pt-md" style="width: 100%; max-width: 40rem; margin: 0 auto">
    <q-breadcrumbs class="q-pb-sm">
      <q-breadcrumbs-el label="Fotos" icon="image" />
    </q-breadcrumbs>

    <div class="categorias ibg">
      <div class="q-gutter-sm">
        <div class="text-h6">
          <router-link
            to="/fotos/junho25"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none"
          >
            Arraial da Floresta
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/cirio24"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none"
          >
            Círio 2024
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/junho24"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none"
          >
            Arraial do Saber
          </router-link>
        </div>

        <q-separator />

        <div class="text-h6">
          <router-link
            to="/fotos/cirio23"
            class="q-item q-item-type row no-wrap"
            style="text-decoration: none"
          >
            Círio 2023
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
.categorias {
  height: calc(100svh - 71px);
  display: flex;
  flex-wrap: wrap;
}

.ibg {
  background-image: url('../assets/cifras.png');
  background-repeat: no-repeat;
  background-position: right top;
}
</style>

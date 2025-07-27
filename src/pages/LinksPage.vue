<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Links" icon="link" />
    </q-breadcrumbs>
    <div class="categorias">
      <div class="q-gutter-sm">
        <div class="text-h6">
          <a
            href="https://drive.google.com/file/d/1MvmmSv0lq9RauqsHt5MF9dIPHAkz5S0t/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >Roda Cantada 2025</a
          >
        </div>

        <q-separator />

        <div class="text-h6">
          <a
            href="https://drive.google.com/file/d/1D5qR1A2L8nzHRdISlIMpoK8Azvb_PTMU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >Roda Cantada 2024</a
          >
        </div>

        <q-separator />
        <div class="text-h6">
          <a
            href="https://drive.google.com/file/d/1-P0kq_pX7-tgelpaswFQB0wrZLhW4aKw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            >Roda Cantada 2023</a
          >
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

<style>
a {
  margin-bottom: 10px;
  color: #0a66c2;
  text-decoration: none;
}

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
  max-width: 37vw;
  height: 100%;
  aspect-ratio: 1 / 1;
  background-image: url('../assets/download.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  pointer-events: none;
  z-index: 0;
}
</style>

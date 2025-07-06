<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pl-md q-pt-md" style="width: 100%; max-width: 40rem; margin: 0 auto">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Links" icon="link" />
    </q-breadcrumbs>
    <div class="categorias ibg">
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
  height: calc(100svh - 127px);
  display: flex;
  flex-wrap: wrap;
}

.ibg {
  background-image: url('../assets/fundolinks.png');
  background-repeat: no-repeat;
  background-size: 50% auto;
  background-position: right bottom;
}
</style>

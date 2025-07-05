<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Links" icon="link" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md">
    <a
      href="https://drive.google.com/file/d/1MvmmSv0lq9RauqsHt5MF9dIPHAkz5S0t/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      >Roda Cantada 2025 <q-icon name="picture_as_pdf" size="xs"
    /></a>
    <a
      href="https://drive.google.com/file/d/1D5qR1A2L8nzHRdISlIMpoK8Azvb_PTMU/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      >Roda Cantada 2024 <q-icon name="picture_as_pdf" size="xs"
    /></a>
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
  display: block;
  margin-bottom: 10px;
  color: #1976d2;
  text-decoration: none;
}
</style>

<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Aulas" icon="school" />
      <q-breadcrumbs-el label="Graus musicais - Harmonia tonal" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/EWb1ZoOjY6E?si=1A6jJTdcGZBBSd1a"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/8QAFwuz30UY?si=aFexVJpNtLx5Q3oy"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/8fIouuBa3pA?si=-0691SJvWDnfAfsY"
          />
        </q-card>
      </q-intersection>
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

<style lang="sass" scoped>
.example-item
  width: 290px

@media screen and (max-width: 600px)
  .example-item
    width: 100%
</style>

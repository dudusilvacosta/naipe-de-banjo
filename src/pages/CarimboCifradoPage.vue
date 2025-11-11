<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Aulas" icon="school" />
      <q-breadcrumbs-el label="Carimbó Cifrado" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/qUN8Z-rfIHM?si=mpZpes0r1PIH0-FC"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/4B7LrEwnfvA?si=Ni75P4Q1rmraCkpm"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/bNzqCmc85TU?si=3VBKjsgcDAriqd8_"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/3nLKP1aTbAw?si=d_WIix4VR8As-VjY"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/P2HkwCcSWns?si=UCIFvF54HRpEL04o"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/HHXYL5VE4wE?si=55lyzO2lCyTFPcgQ"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/P8r2T1lfxps?si=gmcJnhNJbuY8D3EW"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/u-Q_jcsFTk4?si=NBi3M7ZnjV6B6azm"
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

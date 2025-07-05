<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Aulas" icon="school" />
      <q-breadcrumbs-el label="Formação de acordes e leitura de cifras" />
    </q-breadcrumbs>
  </div>
  <div class="row justify-center q-gutter-sm">
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/EWb1ZoOjY6E?si=b7Zl3s_pB2A0GmSC"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/9088ULOLQa4?si=vJdpDEiq15OkaF3X"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/zDd4_MiTfGw?si=5BxW60Mc-go9t3Nj"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/PJdfRTMt7dU?si=OZkJV5zNxoBR1zQ_"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/42HkidSyO3M?si=YjtKsGGJPGHnyoJu"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/EZNtTvxwWrI?si=C7VALWCGmcuK6iVR"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/-3DcckLR9rU?si=AZwtAJ0EMHyp3c9a"
        />
      </q-card>
    </q-intersection>
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

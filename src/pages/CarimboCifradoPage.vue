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
            src="https://www.youtube.com/embed/bNzqCmc85TU?si=3TB6EZcZM76TNMT1"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/HHXYL5VE4wE?si=u-85MzqehBowezF5"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/qUN8Z-rfIHM?si=KvBDToBJV1RjTM0U"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/OxAiB1say8E?si=fPkfwQMrq5wHI0Rr"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/_QGdqHBBQr8?si=AABNZ_BLbmwiyOPp"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/qbMxIG3l23c?si=9mONgKsL4RfUgSww"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/qUN8Z-rfIHM?si=reN6Wiqm0t1qehOB"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/o2MbTl4wOM4?si=k0hwBe5TBCHCVde9"
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

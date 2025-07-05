<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Vídeos" icon="smart_display" />
    </q-breadcrumbs>
  </div>
  <div class="row justify-center q-gutter-sm">
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/RTBWrJWvTvs?si=utNw-cwOy1UjKwyJ"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/NgOI7yVn-lk?si=4nIaA92Uu-Hl03T3"
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

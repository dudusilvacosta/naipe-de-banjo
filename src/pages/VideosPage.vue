<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="width: 100%; max-width: 40rem; margin: 0 auto">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Vídeos" icon="smart_display" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/oHGxLRcADys?si=2bo9E7O7TZJs6b1Y"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/I0XveOblOpc?si=1kzl2bVFPn_M7RDJ"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/WX5toz-JIII?si=_VLjo2QpWI_VnAYQ"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/bs6TnumYTXg?si=Qa9cPediJOdEEuX4"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/dvF0jy1Gk2A?si=jaVyEFTA76rNgUKZ"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/k_ju3HXX75U?si=6GTCE5Jm-sZOEbhO"
          />
        </q-card>
      </q-intersection>
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

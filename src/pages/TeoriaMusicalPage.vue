<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Aulas" icon="school" />
      <q-breadcrumbs-el label="Teoria Musical" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/GJC9zdMG1UQ?si=8T6fAMuFyk4dPRno"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/EWb1ZoOjY6E?si=wbQX7HpunNWgGUZk"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/ZhRceLvP8Ao?si=jsjU-M41wXKWTTit"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/9088ULOLQa4?si=YUBu1u1abwy4JOrJ"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/zDd4_MiTfGw?si=GEudpJ2f1-MRxlLt"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/PJdfRTMt7dU?si=bnmd6pouO0U54JWZ"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/zUAt0BkBml8?si=b3oqWle60-cYa-s7"
          />
        </q-card>
      </q-intersection>
      <q-intersection class="example-item">
        <q-card flat bordered class="q-ma-sm">
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/-Ms2XDHUKSM?si=BYBemrTpKrrdtkiA"
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

<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Fotos" icon="image" />
      <q-breadcrumbs-el label="Círio 2024" />
    </q-breadcrumbs>
    <div class="row justify-center q-gutter-sm">
      <q-intersection class="example-item" @click="card10 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/10.jpg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card10">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/10.jpg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card9 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/9.jpg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card9">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/9.jpg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card8 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/8.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card8">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/8.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card7 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/7.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card7">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/7.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card6 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/6.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card6">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/6.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card5 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/5.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card5">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/5.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card4 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/4.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card4">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/4.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card3 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/3.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card3">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/3.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card2 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/2.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card2">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/2.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
      <q-intersection class="example-item" @click="card1 = true">
        <q-card flat bordered>
          <img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/1.jpeg?raw=true"
          />
        </q-card>
      </q-intersection>
      <q-dialog v-model="card1">
        <q-card class="my-card">
          <q-img
            src="https://github.com/dudusilvacosta/fotos-naipe-banjo/blob/main/cirio-24/1.jpeg?raw=true"
          />
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimeout } from 'quasar';

const showProgress = ref(true);
const { registerTimeout } = useTimeout();

const card1 = ref(false);
const card2 = ref(false);
const card3 = ref(false);
const card4 = ref(false);
const card5 = ref(false);
const card6 = ref(false);
const card7 = ref(false);
const card8 = ref(false);
const card9 = ref(false);
const card10 = ref(false);

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%

.example-item
  width: 290px

@media screen and (max-width: 600px)
  .example-item
    width: 45%
</style>

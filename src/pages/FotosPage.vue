<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Fotos" icon="image" />
    </q-breadcrumbs>
  </div>
  <div class="row justify-center q-gutter-sm" style="margin-top: 1px">
    <q-intersection v-for="index in 30" :key="index" class="example-item" @click="card = true">
      <q-card flat bordered>
        <img src="../assets/foto.jpg" />
      </q-card>
    </q-intersection>
    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img src="../assets/foto.jpg" />

        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">15/06/2025</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const card = ref(false);
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

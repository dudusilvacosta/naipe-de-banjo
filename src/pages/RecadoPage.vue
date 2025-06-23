<template>
  <div class="q-ma-md">
    <q-scroll-area style="height: 90vh; max-width: 100%">
      <div v-for="n in 20" :key="n" class="q-py-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts"></script>

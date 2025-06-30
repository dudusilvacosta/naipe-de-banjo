<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Recados" icon="notifications" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message :text="['Aqui fica os recados']" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

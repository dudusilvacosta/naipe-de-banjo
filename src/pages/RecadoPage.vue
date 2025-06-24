<template>
  <div class="q-pl-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Recados" icon="notification" />
    </q-breadcrumbs>
  </div>
  <div class="q-ma-md">
    <q-scroll-area style="height: 90vh; max-width: 100%">
      <template>
        <div class="q-pa-md row justify-center">
          <div style="width: 100%">
            <q-chat-message :text="['hey, how are you?']" sent />
            <q-chat-message :text="['doing fine, how r you?']" />
          </div>
        </div>
      </template>
    </q-scroll-area>
  </div>
</template>

<script setup lang="ts"></script>

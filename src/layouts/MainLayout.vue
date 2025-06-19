<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-avatar>
          <img src="../assets/logo.png" />
        </q-avatar>
        <q-toolbar-title> Naipe de Banjo </q-toolbar-title>

        <div>v1.0.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'História',
    caption: 'nossa história',
    icon: 'menu_book',
    link: '/',
  },
  {
    title: 'Fotos',
    caption: 'nossas fotos',
    icon: 'image',
    link: '/fotos',
  },
  {
    title: 'Vídeos',
    caption: 'nossos vídeos',
    icon: 'smart_display',
    link: '/videos',
  },
  {
    title: 'Cifras',
    caption: 'músicas cifradas',
    icon: 'music_note',
    link: '/cifras',
  },
  {
    title: 'Aulas',
    caption: 'teoria musical',
    icon: 'school',
    link: '/aulas',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

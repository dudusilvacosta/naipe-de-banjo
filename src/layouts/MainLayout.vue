<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title style="color: #be961e; font-weight: bold">
          Naipe de Banjo
        </q-toolbar-title>

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
    title: 'Início',
    caption: 'boas-vindas',
    icon: 'home',
    link: '/',
  },
  {
    title: 'História',
    caption: 'o banjo no batalhão',
    icon: 'menu_book',
    link: '/historia',
  },
  {
    title: 'Fotos',
    caption: 'memórias dos cortejos',
    icon: 'image',
    link: '/fotos',
  },
  {
    title: 'Vídeos',
    caption: 'vivências e mais',
    icon: 'smart_display',
    link: '/videos',
  },
  {
    title: 'Cifras',
    caption: 'ritmos do Pará e mais',
    icon: 'music_note',
    link: '/cifras',
  },
  {
    title: 'Aulas',
    caption: 'aprenda no compasso certo',
    icon: 'school',
    link: '/aulas',
  },
  {
    title: 'Links',
    caption: 'materiais e recursos extras',
    icon: 'link',
    link: '/links',
  },
  {
    title: 'Notificações',
    caption: 'novidades para o banjo',
    icon: 'notifications',
    link: '/notificacoes',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

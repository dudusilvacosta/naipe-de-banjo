<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title style="color: #ffca28; font-weight: bold">
          <q-img
            src="../assets/logo.png"
            style="width: 103px; height: 50px"
            alt="Logo Naipe de Banjo"
          />
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

    <q-page-container style="padding-bottom: 0 !important">
      <router-view />
    </q-page-container>

    <q-footer style="height: 30px; display: flex; align-items: center; background-color: #f9f9f9">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle2 text-grey-6">
          <div
            style="
              width: 100%;
              height: 30px;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
            "
          >
            <span>Naipe de Banjo</span> <span>{{ version }}</span> &copy; {{ ano }}
            <a
              href="https://eduardosilvacosta.netlify.app/"
              target="_blank"
              class="text-subtitle2 text-grey-6"
              >Eduardo Silva Costa</a
            >
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
    caption: 'ensaios e cortejos',
    icon: 'image',
    link: '/fotos',
  },
  {
    title: 'Vídeos',
    caption: 'vivências',
    icon: 'smart_display',
    link: '/videos',
  },
  {
    title: 'Cifras',
    caption: 'roda cantada e cortejo',
    icon: 'music_note',
    link: '/cifras',
  },
  {
    title: 'Aulas',
    caption: 'no compasso certo',
    icon: 'school',
    link: '/aulas',
  },
  {
    title: 'Links',
    caption: 'recursos extras',
    icon: 'link',
    link: '/links',
  },
  {
    title: 'Notificações',
    caption: 'notícias e avisos',
    icon: 'notifications',
    link: '/notificacoes',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const ano = new Date().getFullYear();
const version = '1.0.0';
</script>

<style scoped>
a {
  margin: 0;
  color: #0a66c2;
}
</style>

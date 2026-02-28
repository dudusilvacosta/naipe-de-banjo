<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title style="color: #ffca28; font-weight: bold"
          >Olá {{ profile?.nome }}</q-toolbar-title
        >

        <div>{{ menusFromDB.length === 0 ? 'sem menus' : `com ${menusFromDB.length} menus` }}</div>
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
import { computed, onMounted, ref } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { supabase } from 'src/boot/supabase';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

interface Profile {
  id: string;
  nome: string;
  email: string;
  avatar_url: string;
}

const authStore = useAuthStore();
const leftDrawerOpen = ref(false);
const profile = ref<Profile | null>(null);
const ano = new Date().getFullYear();
const version = '1.0.0';
const menusFromDB = ref<EssentialLinkProps[]>([]);

async function getProfile() {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', authStore.user?.id);
  if (error) {
    console.error('Erro ao buscar perfil:', error);
    return;
  }
  profile.value = data?.[0] || null;
}
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
async function carregarMenus() {
  const user = authStore.user;

  if (!user) return;

  const { data, error } = await supabase
    .from('user_menus')
    .select(
      `
    menus (
      title,
      caption,
      icon,
      link
    )
  `,
    )
    .eq('user_id', user.id);

  if (error) {
    console.error('Erro ao buscar menus:', error);
    return;
  }

  menusFromDB.value = data?.flatMap((item) => item.menus ?? []) ?? [];
}

async function getMetrics() {
  const res = await fetch('/api/metrics');
  const data = await res.json();
  console.log(data);
}

onMounted(async () => {
  await carregarMenus();
  await getProfile();
  await getMetrics();
});
const linksList = computed<EssentialLinkProps[]>(() => [
  {
    title: 'Voltar',
    caption: 'site principal',
    icon: 'reply',
    link: '/',
  },
  {
    title: 'Visão geral',
    caption: 'métricas',
    icon: 'timeline',
    link: '/dashboard',
  },
  ...menusFromDB.value,
  {
    title: 'Sair',
    caption: 'sair do sistema',
    icon: 'logout',
    link: '/logout',
  },
]);
</script>

<style scoped>
a {
  margin: 0;
  color: #0a66c2;
}
</style>

import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/criar-conta',
    component: () => import('pages/CriarConta.vue'),
  },
  {
    path: '/logout',
    component: () => import('pages/LogoutPage.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/historia',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HistoriaPage.vue') }],
  },
  {
    path: '/albuns',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AlbunsPage.vue') }],
  },
  {
    path: '/album/:nome',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AlbumPage.vue') }],
  },
  {
    path: '/musicas',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/MusicasPage.vue') }],
  },
  {
    path: '/musicas/:repertorio',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/RepertorioPage.vue') }],
  },
  {
    path: '/aulas',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AulasPage.vue') }],
  },
  {
    path: '/aula/:nome',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/AulaPage.vue') }],
  },
  {
    path: '/downloads',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/DownloadsPage.vue') }],
  },
  {
    path: '/favoritas',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/FavoritasPage.vue') }],
  },
  {
    path: '/notificacoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NotificacoesPage.vue') }],
  },
  {
    path: '/videos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VideosPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/dashboard/IndexPage.vue') },
      { path: 'aulas', component: () => import('pages/dashboard/AulasPage.vue') },
      { path: 'musicas', component: () => import('pages/dashboard/MusicasPage.vue') },
      { path: 'downloads', component: () => import('src/pages/dashboard/DownloadsPage.vue') },
      { path: 'albuns', component: () => import('src/pages/dashboard/AlbunsPage.vue') },
      { path: 'notificacoes', component: () => import('pages/dashboard/NotificacoesPage.vue') },
      { path: 'videos', component: () => import('pages/dashboard/VideosPage.vue') },
    ],
  },
];

export default routes;

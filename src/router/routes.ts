import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
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
    path: '/fotos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FotosPage.vue') }],
  },
  {
    path: '/fotos/:album/:ano',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AlbumPage.vue') }],
  },
  {
    path: '/videos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VideosPage.vue') }],
  },
  {
    path: '/cifras',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/CifrasPage.vue') }],
  },
  {
    path: '/cifras/cortejo',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CortejoPage.vue') }],
  },
  {
    path: '/cifras/roda',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/RodaPage.vue') }],
  },
  {
    path: '/cifras/extras',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/CifrasExtrasPage.vue') }],
  },
  {
    path: '/aulas',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AulasPage.vue') }],
  },
  {
    path: '/aulas/aula/:nome',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VideoAulas.vue') }],
  },
  {
    path: '/downloads',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/DownloadsPage.vue') }],
  },
  {
    path: '/notificacoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NotificacoesPage.vue') }],
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
      { path: '/dashboard/aulas', component: () => import('pages/dashboard/AulasPage.vue') },
      { path: '/dashboard/cifras', component: () => import('pages/dashboard/CifrasPage.vue') },
      {
        path: '/dashboard/downloads',
        component: () => import('src/pages/dashboard/DownloadsPage.vue'),
      },
      { path: '/dashboard/fotos', component: () => import('pages/dashboard/FotosPage.vue') },
      {
        path: '/dashboard/notificacoes',
        component: () => import('pages/dashboard/NotificacoesPage.vue'),
      },
      { path: '/dashboard/videos', component: () => import('pages/dashboard/VideosPage.vue') },
    ],
  },
];

export default routes;

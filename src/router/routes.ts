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
    path: '/fotos/cirio25',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Cirio25Page.vue') }],
  },
  {
    path: '/fotos/junho25',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Junho25Page.vue') }],
  },
  {
    path: '/fotos/cirio24',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Cirio24Page.vue') }],
  },
  {
    path: '/fotos/junho24',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Junho24Page.vue') }],
  },
  {
    path: '/fotos/cirio23',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Cirio23Page.vue') }],
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
    path: '/aulas/teoria-musical',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TeoriaMusicalPage.vue') }],
  },
  {
    path: '/aulas/acordes-cifras',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AcordesCifrasPage.vue') }],
  },
  {
    path: '/aulas/graus-harmonia',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GrausHarmoniaPage.vue') }],
  },
  {
    path: '/aulas/carimbo-cifrado',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CarimboCifradoPage.vue') }],
  },
  {
    path: '/downloads',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/DonloadsPage.vue') }],
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
      { path: '/dashboard/aulas', component: () => import('pages/dashboard/AulasPage.vue') },
      { path: '/dashboard/cifras', component: () => import('pages/dashboard/CifrasPage.vue') },
      { path: '/dashboard/downloads', component: () => import('pages/dashboard/DonloadsPage.vue') },
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

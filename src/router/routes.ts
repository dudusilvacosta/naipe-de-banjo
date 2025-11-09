import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
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
    path: '/links',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LinksPage.vue') }],
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
];

export default routes;

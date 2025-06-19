import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/fotos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FotosPage.vue') }],
  },
  {
    path: '/videos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VideosPage.vue') }],
  },
  {
    path: '/cifras',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CifrasPage.vue') }],
  },
  {
    path: '/aulas',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AulasPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

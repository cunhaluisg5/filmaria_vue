import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home';
import Filme from './pages/Filme';
import MeusFilmes from './pages/MeusFilmes';
import Erro from './pages/Erro';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/filme/:id',
      component: Filme,
      props: true
    },
    {
      path: '/salvos',
      component: MeusFilmes
    },
    {
      path: '/:catchAll(.*)',
      component: Erro
    }
  ]
})

export default router;
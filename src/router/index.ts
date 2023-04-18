import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startup',
      component: () => import("@/views/StarterView.vue"),
    },
    {
      path: '/round-creation',
      name: 'round-creation',
      component: () => import("@/views/RoundCreatorView.vue"),
    },
    {
      path: '/running-round',
      name: 'running-round',
      component: () => import("@/views/StartedLobbyView.vue"),
    }
  ]
})

export default router

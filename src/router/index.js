import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/fornecedor',
    name: 'fornecedorView',
    component: () => import('../views/Fornecedor.vue')
  },
  {
    path: '/vereador',
    name: 'vereadorView',
    component: () => import('../views/Vereador.vue')
  },
  {
    path: '/material',
    name: 'materialView',
    component: () => import('../views/Material.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

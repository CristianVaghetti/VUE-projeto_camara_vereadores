import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/fornecedor',
    name: 'fornecedorView',
    component: () => import('../views/Fornecedor.vue')
  },
  {
    path: '/fornecedor/cadastro',
    name: 'addFornecedor',
    component: () => import('../components/addFornecedor.vue')
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

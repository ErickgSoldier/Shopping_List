import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ShoppingView from '@/views/CompraAtual.vue'
import CadastroView from '@/views/TelaCadastro.vue'
import RelatorioView from '@/views/Relatorios.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'shopping',
        component: ShoppingView,
      },
      {
        path: 'cadastro',
        name: 'cadastro',
        component: CadastroView,
      },
      {
        path: 'relatorios',
        name: 'relatorios',
        component: RelatorioView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

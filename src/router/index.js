import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ShoppingView from '@/views/CompraAtual.vue'
import CadastroItemView from '@/views/CadastroItem.vue'
import RelatorioView from '@/views/Relatorios.vue'
import CadastroListaView from '@/views/CadastroLista.vue'
import ListaComprasView from '@/views/ListaCompras.vue'

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
        path: 'cadastroItem',
        name: 'cadastroItem',
        component: CadastroItemView,
      },
      {
        path: 'relatorios',
        name: 'relatorios',
        component: RelatorioView,
      },
      {
        path: 'cadastroLista',
        name: 'cadastroLista',
        component: CadastroListaView,
      },
      {
        path: 'listacompras',
        name: 'listacompras',
        component: ListaComprasView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

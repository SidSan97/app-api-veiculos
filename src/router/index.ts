import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import IndexPage from '../views/IndexPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/CadastrarVeiculo'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/CadastrarVeiculo'
      },
      {
        path: 'CadastrarVeiculo',
        component: () => import('@/views/CadastrarVeiculo.vue')
      },
      {
        path: 'ListarVeiculos',
        component: () => import('@/views/ListarVeiculos.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/index',
    redirect: '/index'
  },
  {
    path: '/index',
    component: IndexPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

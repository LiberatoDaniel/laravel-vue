import Vue from 'vue'
import VueRouter from 'vue-router'
import ServicosView from '../views/ServicosView.vue'
import CadastrarCliente from '../views/CadastrarClienteView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'servicos',
    component: ServicosView
  },
  {
    path: '/ordem-servicos',
    name: 'ordem-servicos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrdemServicosView.vue')
  },
  {
    path: '/cadastrar-cliente',
    name: 'cadastrar-cliente',
    component: CadastrarCliente
  },
]

const router = new VueRouter({routes, mode: 'history'});

export default router

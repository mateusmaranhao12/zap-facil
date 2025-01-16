import { createRouter, createWebHistory } from 'vue-router'
import LoginUsuario from '@/views/LoginUsuario.vue'
import MenuUsuario from '@/views/MenuUsuario.vue'

const routes = [

  {
    path: '/',
    name: 'login-usuario',
    component: LoginUsuario
  },

  {
    path: '/menu-usuario',
    name: 'menu-usuario',
    component: MenuUsuario
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

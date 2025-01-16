import { createRouter, createWebHistory } from 'vue-router'
import LoginUsuario from '@/views/LoginUsuario.vue'

const routes = [

  {
    path: '/',
    name: 'login-usuario',
    component: LoginUsuario
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

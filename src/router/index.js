import { createRouter, createWebHistory } from 'vue-router'
import Conversas from '@/views/Conversas.vue'
import LoginUsuario from '@/views/LoginUsuario.vue'
import MenuUsuario from '@/views/MenuUsuario.vue'
import Kanban from '@/views/Kanban.vue'

const routes = [

  {
    path: '/',
    name: 'login-usuario',
    component: LoginUsuario
  },

  {
    path: '/menu-usuario',
    name: 'menu-usuario',
    component: MenuUsuario,
    redirect: '/menu-usuario/conversas',
    children: [

      {
        path: 'conversas',
        name: 'conversas-usuario',
        component: Conversas
      },

      {
        path: 'kanban',
        name: 'kanban-usuario',
        component: Kanban
      }

    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

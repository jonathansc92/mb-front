import { createRouter, createWebHistory } from 'vue-router'
import RegistrationView from '../views/RegistrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register/Register.vue'),
      children: [
        {
          path: '/register/step1',
          name: 'Step1',
          component: () => import('../views/Register/Step1.vue')
        },
        {
          path: '/register/step2/:selectedPlan',
          name: 'Step2',
          props: true,
          component: () => import('../views/Register/Step2.vue'),
        },
      ]
    },

  ]
})

export default router

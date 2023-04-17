import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
function checkIfUserIsLogged() {
  if (!localStorage.getItem('access_token')) {
    return '/login'
  }
}
function checkIfUserIsNotLoggedIn() {
  if (localStorage.getItem('access_token')) {
    return '/'
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: checkIfUserIsLogged,
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      beforeEnter: checkIfUserIsNotLoggedIn,
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      beforeEnter: checkIfUserIsNotLoggedIn,
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
    {
      path: "/:notFound",
      name: 'NotFound',
      beforeEnter: checkIfUserIsLogged,
      component: HomeView
    }
  ]
})

export default router

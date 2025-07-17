import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import Shop from '../components/pages/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    }
   
  ],
})

export default router

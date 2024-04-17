import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
const MathView = () => import('@/views/MathView.vue');
const AboutView = () => import('@/views/AboutView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/math',
      name: 'math',
      component: MathView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
});

export default router;

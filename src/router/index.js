import { createRouter, createWebHistory } from 'vue-router';
import ThePasswordGeneration from "@/components/Bloks/ThePasswordGeneration";
import TheNumberGeneration from "@/components/Bloks/TheNumberGeneration";
import TheAbout from "@/components/Bloks/TheAbout";

const routes = [
  {
    path: '/password',
    component: ThePasswordGeneration
  },
  {
    path: '/number',
    component: TheNumberGeneration
  },
  {
    path: '/about',
    component: TheAbout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

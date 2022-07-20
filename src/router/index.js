import { createRouter, createWebHistory } from 'vue-router'
import PasswordGenerateComponent from "@/components/Bloks/PasswordGenerateComponent";
import NumberGenerateComponent from "@/components/Bloks/NumberGenerateComponent";

const routes = [
  {
    path: '/',
    component: PasswordGenerateComponent
  },
  {
    path: '/password',
    component: PasswordGenerateComponent
  },
  {
    path: '/number',
    component: NumberGenerateComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

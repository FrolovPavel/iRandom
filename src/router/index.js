import { createRouter, createWebHistory } from 'vue-router'
import PasswordGenerateComponent from "@/components/Bloks/PasswordGenerateComponent";
import NumberGenerateComponent from "@/components/Bloks/NumberGenerateComponent";
import AboutProjectComponent from "@/components/Bloks/AboutProjectComponent";

const routes = [
  {
    path: '/password',
    component: PasswordGenerateComponent
  },
  {
    path: '/number',
    component: NumberGenerateComponent
  },
  {
    path: '/about',
    component: AboutProjectComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    redirect: "/basic",
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import("@/components/Basic.vue")
  },
  {
    path: '/todo',
    name:'Todo',
    component: () => import("@/components/TodoList.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

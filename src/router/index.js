import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  { path: '/', component: Home },     
  { path: '/login', component: Login },
  { path: '/history', component: History },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
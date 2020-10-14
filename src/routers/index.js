import { createRouter, createWebHistory } from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // }
  cinemaRouter,
  mineRouter,
  movieRouter,
  {
    path:'',
    redirect:'/movie'
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

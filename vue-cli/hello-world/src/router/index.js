import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const Home = () => import('../views/HomeView.vue')
const About = () => import('../views/AboutView.vue')
const Agreewithu = () => import('..//views/Agreewithu.vue')
const NotFound = () => import('../views/NotFound.vue')
const User = () => import('../views/User.vue')

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    children:[
      {
        path:'/home/about',
        name:'about',
        component:About
      },
      {
        path:'/home/Agreewithu',
        name:'Agreewithu',
        component:Agreewithu
      },
      {
        path:'/home/user/:id',
        name:'user',
        component:User
      }
    ],
    component:Home
  },
  // {
  //   path:'/:pathMatch(.*)*',
  //   redirect:'/notfound'
  // },
  {
    path:'/notfound',
    component:NotFound
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

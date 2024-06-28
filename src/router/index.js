import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView'
import SupportView from '@/views/SupportView'
import QuestionView from '@/views/QuestionView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/suporte',
    name: 'Support',
    component: SupportView
  },
  {
    path: '/perguntas',
    name: 'Questions',
    component: QuestionView
  }
]

const router = new VueRouter({
  routes
})

export default router

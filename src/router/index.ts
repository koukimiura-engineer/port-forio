import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/Top.vue'
import Profile from '../views/Profile.vue'
import Works from '../views/Works.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router

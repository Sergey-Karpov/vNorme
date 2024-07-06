import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PickDoctorView from '@/views/PickDoctorView.vue'
import BecomeDoctorView from '@/views/BecomeDoctorView.vue'
import ForDoctorView from '@/views/ForDoctorView.vue'
import ContactsView from '@/views/ContactsView.vue'
import PolicyView from '@/views/PolicyView.vue'
import OfferView from '@/views/OfferView.vue'
import QAView from '@/views/QAView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/pick-doctor'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pick-doctor',
      name: 'pick-doctor',
      component: PickDoctorView
    },
    {
      path: '/become-doctor',
      name: 'become-doctor',
      component: BecomeDoctorView
    },
    {
      path: '/for-doctor',
      name: 'for-doctor',
      component: ForDoctorView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/policy',
      name: 'policy',
      component: PolicyView
    },
    {
      path: '/offer',
      name: 'offer',
      component: OfferView
    },
    {
      path: '/Q&A',
      name: 'Q&A',
      component: QAView
    }
  ]
})

export default router

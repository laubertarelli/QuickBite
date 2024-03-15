import { createRouter, createWebHistory } from 'vue-router';
import Restorants from '../components/Restorants/Restorants.vue';
import Orders from '../components/Orders/Orders.vue';
import RestorantsNearMe from '../components/Maps/RestorantsNearMe.vue';
import AdminView from '@/views/AdminView.vue';
import PageNotFound from '../components/Generic/PageNotFound.vue';
import RestorantDetails from '../components/Restorants/RestorantDetails.vue';
import OrderDetails from '../components/Orders/OrderDetails.vue';
import UserProfile from '../components/Admin/UserProfile.vue';
import Billing from '../components/Admin/Billing.vue';
import CartDetails from '../components/Cart/CartDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-route',
  linkExactActiveClass: 'exact-route',
  routes: [
    {
      path: '/',
      redirect: { name: 'Restorants' },
      meta: { requiresAuth: false, title: 'Restorants' }
    },
    {
      path: '/restorants',
      name: 'Restorants',
      component: Restorants,
      meta: { requiresAuth: false, title: 'Restorants' }
    },
    {
      path: '/restorants/:id',
      name: 'RestorantDetails',
      props: true,
      components: {
        default: RestorantDetails,
        'Sidebar': CartDetails
      },
      meta: { requiresAuth: false, title: 'Restorants' }
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      meta: { requiresAuth: true, title: 'Orders' }
    },
    {
      path: '/orders/:id',
      name: 'OrderDetails',
      props: true,
      component: OrderDetails,
      meta: { requiresAuth: true, title: 'Orders' }
    },
    {
      path: '/nearme',
      name: 'NearMe',
      component: RestorantsNearMe,
      meta: { requiresAuth: false, requiresLocation: true, title: 'Near Me' }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminView,
      meta: { requiresAuth: true, title: 'Account' },
      redirect: { name: 'Profile' },
      children: [
        {
          path: 'profile',
          name: 'Profile',
          component: UserProfile
        },
        {
          path: 'billing',
          name: 'Billing',
          component: Billing
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
      meta: { requiresAuth: false, title: 'Page Not Found' }
    }
  ]
});

router.beforeResolve(async (to, from) => {
  if (to.meta?.requiresLocation) {
    try {
      await getCurrentLocation();
    } catch (error) {
      return false;
    }
  }
});
router.afterEach((to, from) => {
  document.title = 'QuickBite | ' + to.meta?.title;
})
function getCurrentLocation(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          resolve({ lat: position.coords.latitude, lng: position.coords.longitude })
        },
        (error: any) => {
          reject(error);
        }
      )
    } else {
      reject('Geolocation is not enabled');
    }
  })
}

export default router;
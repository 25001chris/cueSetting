
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // routes : [
  //   {path: '/',component: () => import('@/pages/index.vue')},
  //   {path: '/afterEvaluate',component: () => import('@/pages/afterEvaluate.vue')},
  //   {path: '/afterEvaluateSetting',component: () => import('@/pages/afterEvaluateSetting.vue')},
  //   {path: '/multiToRun', component: ()=> import('@/pages/multiToRun.vue')},
  //   {path: '/cue', component: ()=> import('@/pages/cue.vue')},
  // ]
})



// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  console.log(routes)
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

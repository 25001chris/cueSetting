
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

import multiToRun from '@/pages/multiToRun.vue'
import NumberImport from '@/pages/numberImport.vue'
import AfterEvaluateSetting from '@/pages/afterEvaluateSetting.vue'
import AfterEvaluate from '@/pages/afterEvaluate.vue'
import Cue from '@/pages/cue.vue'

const test = [
  {
    path: '/',
    redirect: '/afterEvaluate',
  },
  {
    path: '/afterEvaluateSetting',
    name: '/afterEvaluateSetting',
    component:() => AfterEvaluateSetting
  },
  {
    path: '/afterEvaluate',
    name: '/afterEvaluate',
    component:() => AfterEvaluate
  },
  {
    path: '/cue',
    name: '/cue',
    component: Cue
  },
  {
    path: '/multiToRun',
    name: '/multiToRun',
    component: multiToRun
  },
  {
    path: '/numberImport',
    name: '/numberImport',
    component: NumberImport
  },
  {
    path: '*',
    redirect: '/afterEvaluate'
  },
  ...routes
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:test
})


// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log(0)
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.log(1)
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.log(2)
    console.error(err)
  }
})

router.isReady().then(() => {
  console.log(routes)
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import 'element-plus/theme-chalk/dark/css-vars.css'


const app = createApp(App)

registerPlugins(app)

app.use(ElementPlus)
app.mount('#app')

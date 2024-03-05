import '@/assets/main.css'
import "tailwindcss/tailwind.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuesax from "vuesax-alpha"

import App from './App.vue'
import router from './router'

// style
import 'vuesax-alpha/dist/index.css'
// vuesax darkmode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vuesax)

app.mount('#app')

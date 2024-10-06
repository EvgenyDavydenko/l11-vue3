import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Auth from './Auth.vue'
import router from './router'

import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const app = createApp(Auth)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import './assets/reset.css'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')

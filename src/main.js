import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import './index.css'
import store from './store'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App).use(store).use(router).use(createMetaManager())

await router.isReady()
app.mount('#app')

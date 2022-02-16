import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store'
import Header from './components/partial/Header.vue'

const app = createApp(App).use(store)

app.use(router);

app.component('the-header', Header)

app.mount('#app');
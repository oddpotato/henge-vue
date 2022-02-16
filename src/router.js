import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import Druids from './pages/Druids.vue';
import ContactUs from './pages/ContactUs.vue';
import Messages from './pages/Messages.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/druids', component: Druids },
        { path: '/contact', component: ContactUs },
        { path: '/messages', component: Messages },
    ]
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import Druids from './pages/Druids.vue';
import ContactUs from './pages/ContactUs.vue';
import Messages from './pages/Messages.vue'
import ErrorPage from './pages/ErrorTemplate.vue'
import EditJson from './pages/EditJson.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'homepage', component: HomePage },
        { path: '/druids', component: Druids },
        {
            path: '/druids/:id',
            component: null,
            children: [
                { path: '/contact', component: ContactUs },
            ]
        },
        { path: '/messages', component: Messages },
        { path: '/:notfound(.*)', name: 'errorpage', component: ErrorPage },
        { path: '/editjson', name: 'editjson', component: EditJson }
    ]
});

export default router;
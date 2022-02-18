import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/Homepage.vue';
import Druids from './pages/Druids.vue';
import ContactUs from './pages/ContactUs.vue';
import Messages from './pages/Messages.vue'
import ErrorPage from './pages/ErrorTemplate.vue'
import EditDruids from './pages/DruidData.vue'
import AddDruid from './components/partial/AddDruid.vue'
import DeleteDruid from './components/partial/DeleteDruid.vue'

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
        {
            path: '/edit',
            name: 'edit',
            component: EditDruids,
        },
        { path: '/edit/add', component: AddDruid },
        { path: '/edit/delete', component: DeleteDruid }
    ]
});

export default router;
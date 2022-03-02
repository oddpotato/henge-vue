import { createRouter, createWebHistory } from 'vue-router';

// For displaying data
import HomePage from './pages/Homepage.vue';
import Druids from './pages/Druids.vue';
import Druid from './components/partial/Druid.vue';

// For contacting druids
import ContactUs from './pages/ContactUs.vue';
import Messages from './pages/Messages.vue';

// For error handling
import ErrorPage from './pages/ErrorTemplate.vue';

// For adding and updating druid data
import EditDruids from './pages/EditData/DruidData.vue';
import AddDruid from './components/partial/EditData/AddDruid.vue';
import DeleteDruid from './components/partial/EditData/DeleteDruid.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'homepage', component: HomePage },
        { path: '/druids', component: Druids },
        {
            path: '/druids/:id',
            component: Druid,
            children: [
                { path: 'contact', component: ContactUs },
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
import Dashboard from './components/Dashboard.vue';
import Auth from "./components/Auth";
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashboard,

    },{
        name: 'auth',
        path: '/login',
        component: Auth
    },
];

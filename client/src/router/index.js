import { createRouter, createWebHistory } from 'vue-router';

// Simulerad autentiseringstillstånd (ersätt med din verkliga store/state management)
const isAuthenticated = () => {
    // Kollar efter JWT i localStorage
    return localStorage.getItem('user_token') !== null;
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        // Routing Guard: Skyddar sidan om användaren inte är inloggad
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

// Global navigation guard
router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;
    const isLoggedIn = isAuthenticated();

    // 1. Om sidan kräver inloggning OCH användaren INTE är inloggad, skicka till Login.
    if (requiresAuth && !isLoggedIn) {
        next({ name: 'Login' });
        return;
    }

    // 2. Om användaren försöker nå startsidan ('/') OCH INTE är inloggad, skicka till Login.
    // Detta hanterar fallet där '/' anropar skyddad data utan att vara markerad med requiresAuth.
    if (to.path === '/' && !isLoggedIn) {
        next({ name: 'Login' });
        return;
    }

    // 3. Om användaren är inloggad och försöker nå Login/Register, skicka till Dashboard.
    if ((to.name === 'Login' || to.name === 'Register') && isLoggedIn) {
        next({ name: 'Dashboard' });
        return;
    }

    // Annars, fortsätt som vanligt
    next();
});

export default router;

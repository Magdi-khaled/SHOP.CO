import { createRouter, createWebHistory } from "vue-router";
import userRouter from "./user-router/router";
import shopRouter from "./shop-router/router";
import notFound from '../components/notFound.vue';
import UnAuthorized from '../components/unAuthorized.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...shopRouter.options.routes,
        ...userRouter.options.routes,

        {
            path: '/:catchAll(.*)',
            meta: {
                title: 'Shop.co | Page NotFound 404',
            },
            component: notFound
        },
        {
            path: '/shop.co/401-un-authorized',
            name: 'UnAuthorized',
            title: 'Shop.co | UnAuthorized',
            component: UnAuthorized
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/shop.co/401-un-authorized'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return { top: 0 };
    },
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresTransition) {
        // Show the loader only if the route requires a transition
        document.getElementById('loading').classList.remove('hidden');
    }
    next();
});

router.afterEach((to) => {
    if (to.meta.requiresTransition) {
        // Hide the loader after the route transition
        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden');
        }, 1000); // Optional delay to match your transition
    }
});

export default router;
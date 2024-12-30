import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/shop.co/home'
        },
        {
            path: '/shop.co/home',
            name: 'shop.co-home',
            component: () => import('../../views/shop/home.vue'),
        },
        {
            path: "/shop.co/shop",
            name: "shop",
            component: () => import("../../views/shop/shop.vue"),
            meta: { requiresTransition: true },
        },
        {
            path: "/shop.co/shop/product/:id",
            name: "shop-product",
            component: () => import("../../views/shop/shop.product/shop.product.vue"),
            props: true,
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.path} to ${to.path}`);
    next();
});
export default router;
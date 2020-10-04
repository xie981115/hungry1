import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/food'
        },
        {
            path: '/food',
            component: () =>
                import ('../views/food/index.vue')
        },
        {
            path: '/delicious',
            component: () =>
                import ('../views/delicious/index.vue')
        },
        {
            path: '/order',
            component: () =>
                import ('../views/order/index.vue')
        },
        {
            path: '/mine',
            component: () =>
                import ('../views/mine/index.vue')
        }
    ],
    linkActiveClass: 'active'
})

export default router
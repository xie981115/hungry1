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
            path: '/food/detail',
            component: () =>
                import ('../views/food/detail/detail.vue'),
            redirect: 'food/detail/product',
            children: [{
                    path: 'product',
                    component: () =>
                        import ('../views/food/detail/product/index.vue')
                },
                {
                    path: 'ping',
                    component: () =>
                        import ('../views/food/detail/ping/index.vue')
                },
                {
                    path: 'business',
                    component: () =>
                        import ('../views/food/detail/business/index.vue')
                }
            ]
        },
        {
            path: '/delicious',
            component: () =>
                import ('../views/delicious/index.vue'),
            redirect: '/delicious/watch',
            children: [{
                    path: 'watch',
                    component: () =>
                        import ('../views/delicious/watch/index.vue')
                },
                {
                    path: 'xiang',
                    component: () =>
                        import ('../views/delicious/xiang/index.vue')
                }
            ]
        },
        {
            path: '/order',
            component: () =>
                import ('../views/order/index.vue'),
            redirect: '/order/all',
            children: [{
                    path: 'all',
                    component: () =>
                        import ('../views/order/all/index.vue')

                },
                {
                    path: 'xiao',
                    component: () =>
                        import ('../views/order/xiao/index.vue')

                },
                {
                    path: 'pin',
                    component: () =>
                        import ('../views/order/pin/index.vue')

                },
                {
                    path: 'tui',
                    component: () =>
                        import ('../views/order/tui/index.vue')

                }
            ]
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
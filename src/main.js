import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MintUI);

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
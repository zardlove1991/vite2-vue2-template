import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';
import '@/config/element.config';
import openModal  from './utils/Dialog';
Vue.prototype.$openModal = openModal;
// 引入全局组件
const modules = import.meta.glob("/src/components/global/**");
Object.keys(modules).forEach((key) => {
    modules[key]().then((mod) => {
        const file = key.split('/').pop().replace(/.js$/, '').replace(/.vue$/, '');
        Vue.component(file, mod.default || mod[file]);
    });
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

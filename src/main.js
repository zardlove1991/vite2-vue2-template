import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';
import '@/config/element.config';
import openModal  from './utils/Dialog';
Vue.prototype.$openModal = openModal;
// 引入全局组件
const styles = import.meta.glob("/src/components/global/**.js");
Object.keys(styles).forEach((key) => {
    console.log(key, styles[key]());
    styles[key]().then((mod) => {
        const file = key.split('/').pop().replace(/.js$/, '');
        Vue.component(file, mod[file]);
    });
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

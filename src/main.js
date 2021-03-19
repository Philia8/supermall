import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false;
// 创建全局事件总线，值为一个vue 实例，可以调用vue 的实例方法
Vue.prototype.$bus = new Vue();

new Vue({
    render: h => h(App),
    router,
    components: {
        ElementUI
    }
}).$mount('#app')
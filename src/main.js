import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
// 引入样式文件
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    components: {
        ElementUI
    }
}).$mount('#app')
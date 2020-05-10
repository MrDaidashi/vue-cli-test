import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios";
import store from './store'

Vue.prototype.$axios=axios
Vue.use(VueAxios,axios);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
    store,
    router,
}).$mount('#app')

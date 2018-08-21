// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueResource from 'vue-resource';
import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css';
import iView from 'iview/dist/iview.min.js';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(iView);
Vue.use(VueI18n)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

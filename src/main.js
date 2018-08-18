// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App';
import vueRouter from 'vue-router';
import Users from '@/components/users';
import First from '@/components/first';

Vue.config.productionTip = false;
Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Users },
    { path: '/first', component: First },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</li>
        <li><router-link to="/first">First</li>
      </ul>
      <router-view></router-view>
    </div>
  `,
}).$mount('#app');

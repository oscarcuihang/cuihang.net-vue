import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/users';
import First from '@/components/first';
import Home from '@/components/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/first',
      name: 'First',
      component: First,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});

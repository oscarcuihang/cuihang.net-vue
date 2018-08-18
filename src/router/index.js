import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/users';
import First from '@/components/first';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
    },

    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/first',
      name: 'First',
      component: First,
    },
  ],
});

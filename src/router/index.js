import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/Users';
import First from '@/components/First';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
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

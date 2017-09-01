import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Editar from 'components/Editar';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/editar',
      name: 'Editar',
      component: Editar,
    },
  ],
});

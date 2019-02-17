import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import(/* webpackChunkName: "onboarding" */ './views/onboarding.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import(/* webpackChunkName: "game" */ './views/game.vue'),
    },
  ],
});

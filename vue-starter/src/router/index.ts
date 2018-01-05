import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HelloWorld from '@/components/HelloWorld.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});


import Vue from 'vue';
import Router from 'vue-router';
import PokemonsList from '@/components/PokemonsList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PokemonsList',
      component: PokemonsList,
    },
  ],
  linkActiveClass: 'is-active',
});

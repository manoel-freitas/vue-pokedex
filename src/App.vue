<template>
  <div id="app">
    <poke-header></poke-header>
    <router-view></router-view>
    <poke-footer></poke-footer>
  </div>
</template>

<script>
import PokeHeader from '@/components/commons/Header';
import PokeFooter from '@/components/commons/Footer';

export default {
  name: 'app',
  components: { PokeHeader, PokeFooter },
};
</script>

<style lang="sass">
  

</style>

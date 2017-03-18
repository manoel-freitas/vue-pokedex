<script>
  import PokeNav from './Nav';

  export default {
    name: 'header',
    components: { PokeNav },
  };

</script>

<template>
  <section class="hero is-danger ">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <img src="../../assets/pokemon_logo.png" alt="">
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
          <span></span>
          <span></span>
          </span>
          </div>
      </header>
      </div>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Pokedéx Vue
        </h1>
        <h2 class="subtitle">
          Uma Pokedéx feita com Vue.js
        </h2>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
        <poke-nav></poke-nav>
    </div>
  </section>
</template>

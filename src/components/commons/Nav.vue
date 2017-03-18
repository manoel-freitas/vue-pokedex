<script>
  export default {
    name: 'nav',
  };
</script>

<template>
 <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
         <router-link tag="li" to="/" exact>
            <a>Pokemons</a>
         </router-link>
        </ul>
      </div>
    </nav>
</template>


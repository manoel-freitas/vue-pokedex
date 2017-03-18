<script>
  export default {
    name: 'pokemons-list',
    data() {
      return {
        pokes_info: {},
        pokes: [],
      };
    },
    methods: {
      next() {
        axios.get(this.pokes_info.next)
          .then(response => this.pokes_info = response.data)
          .then(() => this.get_pokes());
      },
      prev() {
        axios.get(this.pokes_info.previous)
          .then(response => this.pokes_info = response.data)
          .then(() => this.get_pokes());
      },
      get_pokes() {
        this.pokes = [];
        this.pokes_info.results.forEach((result) => {
          axios.get(result.url).then(response => this.pokes.push(response.data));
        });
      },
      get_image(id) {
        return `../assets/pokemon/${id}.png`;
      },
    },
    mounted() {
      axios.get('http://pokeapi.co/api/v2/pokemon/')
        .then(response => this.pokes_info = response.data)
        .then(() => this.get_pokes());
    },
  };

</script>

<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="heading">
        <h1 class="title">Pokémons</h1>
        <h2 class="subtitle" v-show="pokes_info.count">
          Atualmente existem {{pokes_info.count}} pokémos para capturar
        </h2>
      </div>
      <div class="columns is-multiline">
        <div class="column is-3" v-for="poke in pokes" >
          <div class="box" >
            <div class="columns">
                <div class="column is-4">
                    <figure class="image is-48x48">
                        <img :src="require(`../assets/pokemon/${poke.id}.png`)" alt="Image">
                    </figure>
                </div>
                <div class="column">
                        <p>{{poke.name}}</p>
                </div>
            </div>
        </div>
      </div>
      </div>
      <nav class="pagination is-centered">
        <a class="pagination-previous is-danger" v-show="pokes_info.previous" @click="prev">
          <</a>
            <a class="pagination-next is-danger" @click="next">></a>
      </nav>
    </div>
  </section>
</template>

<template>
  <div class="fight container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="card">
          <img class="card-img-top" :src="champ.imgUrl" alt />
          <div class="card-body">
            <h4 class="card-title">{{champ.name}}</h4>
            <p class="card-text">{{game.championHp}} hp</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <img class="card-img-top" :src="dragon.imgUrl" alt />
          <div class="card-body">
            <h4 class="card-title">{{dragon.name}}</h4>
            <p class="card-text">{{game.dragonHp}} hp</p>
          </div>
        </div>
        <button
          @click="attack(champ.attacks[0].name)"
          type="button"
          class="btn btn-primary"
        >{{champ.attacks[0].name}}</button>
        <button
          @click="attack(champ.attacks[1].name)"
          type="button"
          class="btn btn-primary"
        >{{champ.attacks[1].name}}</button>
        <button
          @click="attack(champ.attacks[2].name)"
          type="button"
          class="btn btn-primary"
        >{{champ.attacks[2].name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  mounted() {
    this.$store.dispatch("getGame", {
      dragon: this.dragon.id,
      champion: this.champ.id,
    });
  },
  name: "Home",
  components: {},
  computed: {
    dragon() {
      return this.$store.state.activeDragon;
    },
    champ() {
      return this.$store.state.activeChamp;
    },
    game() {
      return this.$store.state.game;
    },
  },
  methods: {
    attack(move) {
      this.$store.dispatch("attack", { attack: move, id: this.game.id });
    },
  },
};
</script>

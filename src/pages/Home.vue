<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6">
        <button v-if="aChamp && aDragon" type="button" class="btn btn-primary">Fight</button>
        <dragon v-for="d in dragons" :key="d.id" :dragonData="d" />
      </div>
      <div class="col-6">
        <champ v-for="c in champs" :key="c.id" :champData="c" />
      </div>
    </div>
  </div>
</template>

<script>
import Dragon from "../components/DragonComp.vue";

import Champ from "../components/ChampComp.vue";
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getAllDragons");
    this.$store.dispatch("getAllChamps");
  },
  components: {
    Dragon,
    Champ,
  },
  computed: {
    dragons() {
      return this.$store.state.dragons;
    },
    champs() {
      return this.$store.state.champs;
    },
    aChamp() {
      return this.$store.state.activeChamp;
    },
    aDragon() {
      return this.$store.state.activeDragon;
    },
  },
};
</script>

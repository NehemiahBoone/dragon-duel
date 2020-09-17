<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6"></div>
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
    this.$store.dispatch("getDragon");
    this.$store.dispatch("getChamp");
  },
  components: {
    aDragon,
    aChamp,
  },
  computed: {
    dragons() {
      return this.$store.state.activeDragon;
    },
    champ() {
      return this.$store.state.activeChamp;
    },
  },
};
</script>

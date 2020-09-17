<template>
  <div class="dragon my-2">
    <div class="card" @click="setActive">
      <img class="card-img-top" :src="dragonData.imgUrl" alt />
      <div class="card-body">
        <h4 class="card-title">{{dragonData.name}}</h4>
        <p class="card-text">{{dragonData.hp}} hp</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "dragon",
  props: {
    dragonData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActive() {
      this.$store.dispatch("setActiveDragon", this.dragonData);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>
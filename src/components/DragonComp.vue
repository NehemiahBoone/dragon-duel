<template>
  <div class="dragon">
    <div class="card">
      <img class="card-img-top" :src="dragonData.imgUrl" alt />
      <div class="card-body">
        <h4 class="card-title">{{dragonData.name}}</h4>
        <p class="card-text">{{dragonData.hp}}</p>
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
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>
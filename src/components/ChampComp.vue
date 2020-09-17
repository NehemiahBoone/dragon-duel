<template>
  <div class="champ my-2" @click="setActive">
    <div class="card">
      <img class="card-img-top" :src="champData.imgUrl" alt />
      <div class="card-body">
        <h4 class="card-title">{{champData.name}}</h4>
        <p class="card-text">{{champData.class}} with {{champData.hp}} hp</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "champ",
  props: {
    champData: {
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
      this.$store.dispatch("setActiveChamp", this.champData);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>
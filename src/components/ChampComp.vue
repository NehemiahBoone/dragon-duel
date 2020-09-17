<template>
  <div class="champ">
    <div class="card">
      <img class="card-img-top" :src="champData.imgUrl" alt />
      <div class="card-body">
        <h4 class="card-title">{{champData.name}}</h4>
        <p class="card-text">{{champData.hp}}</p>
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
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>
import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../services/AxiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: []
  },
  mutations: {
    setDragons(state, dragons) {
      state.dragons = dragons
    }
  },
  actions: {
    async getAllDragons({ commit }) {
      let res = await api.get("dragons")
      commit('setDragons', res.data)
    }
  },
  modules: {
  }
})

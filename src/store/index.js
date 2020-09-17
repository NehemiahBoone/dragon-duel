import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../services/AxiosService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragons: [],
    champs: [],
    activeChamp: null,
    activeDragon: null,
  },
  mutations: {
    setDragons(state, dragons) {
      state.dragons = dragons
    },
    setChamps(state, champs) {
      state.champs = champs
    },
    setActiveDrag(state, dragon) {
      state.activeDragon = dragon
    },
    setActiveChamp(state, champ) {
      state.activeChamp = champ
    }
  },
  actions: {
    async getAllDragons({ commit }) {
      let res = await api.get("dragons")
      commit('setDragons', res.data)
    },
    async getAllChamps({ commit }) {
      let res = await api.get("champions")
      commit('setChamps', res.data)
    },
    setActiveDragon({ commit }, dragon) {
      commit('setActiveDrag', dragon)
    },
    setActiveChamp({ commit }, champ) {
      commit('setActiveChamp', champ)
    },
  },
  modules: {
  }
})

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
    game: {}
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
    },
    setGame(state, game) {
      state.game = game
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
    async getGame({ commit }, game) {
      let res = await api.post("games", game)
      console.log(res);
      commit('setGame', res.data)
    },
    async attack({ commit }, obj) {
      let res = await api.put(`games/${obj.id}`, { attack: obj.attack })
      commit("setGame", res.data)
    }
  },
  modules: {
  }
})

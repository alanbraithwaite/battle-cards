import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: []

  },
  mutations: {
    setGame(state, game) {
      state.game = game
    }
  },
  actions: {
    getGame({ commit }, gameId) {
      api.post("/games")
        .then(res => {
          console.log("newgame", res.data)
        })
    }
  }
})

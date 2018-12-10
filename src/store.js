import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let api = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    player: undefined,
    opponent: undefined

  },
  mutations: {
    setGame(state, game) {
      state.game = game
      router.push({ name: "game", params: { gameId: game.id } })
      console.log(state.game)
    },
    setOpponent(state, card) {
      state.opponent = card
    },
    setPlayer(state, card) {
      state.player = card
    }
  },

  actions: {
    startGame({ dispatch, commit }, deckNum, playerName) {
      let gameCfg = { "playerName": playerName, "set": deckNum }
      api.post("/", { "gameConfig": gameCfg })
        .then(res => {
          console.log(res)
          commit("setGame", res.data.game)
        })
    },
    setOpponent({ dispatch, commit }, card) {
      commit("setOpponent", card)

    },
    setPlayer({ dispatch, commit }, card) {
      commit("setPlayer", card)

    },
  }
})

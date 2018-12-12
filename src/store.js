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
    playerCard: undefined,
    opponentCard: undefined

  },
  mutations: {
    setGame(state, game) {
      state.game = game
      router.push({ name: "game", params: { gameId: game.id } })
      console.log(state.game)
    },
    setOpponentCard(state, card) {
      state.opponentCard = card
    },
    setPlayerCard(state, card) {
      state.playerCard = card
    },
    resetGame(state, game) {
      state.game = game
    },

  },

  actions: {
    startGame({ dispatch, commit }, payLoad) {
      console.log(payLoad)
      let gameCfg = { "playerName": payLoad.playerName, "set": payLoad.deckNum }
      api.post("/", { "gameConfig": gameCfg })
        .then(res => {
          console.log(res)
          commit("setGame", res.data.game)
        })
    },
    setOpponentCard({ dispatch, commit }, card) {
      commit("setOpponentCard", card)

    },
    setPlayerCard({ dispatch, commit }, card) {
      commit("setPlayerCard", card)

    },
    getGamebyId({ dispatch, commit, state }, gameId) {
      api.get(`/${gameId}`)
        .then(res => {
          console.log(res, "Game Res");
          commit("setGame", res.data.data);
          commit('setPlayerCard', state.playerCard);
          commit('setOpponentCard', state.opponentCard);
        })

    },
    duel({ dispatch, commit, state }) {
      let payload = {
        "playerCardId": state.playerCard.id,
        "opponentCardId": state.opponentCard.id
      }
      api.put(`/${state.game.id}`, payload)
        .then(res => {
          console.log(res);
          commit("setGame", res.data.game);
          let playerCard = res.data.game.player.hand.find(h => {
            return h.id == payload.playerCardId
          })
          let opponentCard = res.data.game.opponent.hand.find(o => {
            return o.id == payload.opponentCardId
          })
          commit('setPlayerCard', playerCard)
          commit('setOpponentCard', opponentCard)
        })
    },
    quit({ dispatch, commit }, gameId) {
      commit('setPlayerCard', undefined)
      commit('setOpponentCard', undefined)
      commit('resetGame', {})
      api.delete(`/${gameId}`)
        .then(res => router.push({ name: 'battleCards' }))
    }
  }
})

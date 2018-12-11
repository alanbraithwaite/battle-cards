import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import BattleCards from './views/BattleCards.vue'
// @ts-ignore
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'battleCards',
      component: BattleCards
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        // @ts-ignore
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/games/:gameId',
      name: 'game',
      component: Game
    }
  ]
})

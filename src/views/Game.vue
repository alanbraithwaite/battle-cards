<template>
  <div v-if="game.id" class="game">
    <!-- <div v-if="game.winner">{{gameEnd}}</div> -->
    <h2 class="o-card-count">Cards remaining: {{game.opponent.remainingCards + game.opponent.hand.length}}</h2>
    <!-- <button @click="quit(game.id)">quit</button> -->
    <div class="opponent">
      <div class="opponent-hand">
        <div v-for="card in game.opponent.hand" @click="setOpponent(card)" :key="card.id">
          <img v-if="!card.visible" src="@/assets/Card_back_Power_Core.png" class="hidden" height="150">
          <div class="opp-card" v-else-if="card.visible">
            <img :src="card.img" height="150">
            <span class="defense">{{card.defense}}</span>
            <i class="fas fa-shield-alt shield"></i>
            <span class="attack">{{card.attack}}</span>
            <span class="health">{{card.health}}</span>
            <span class="swords">&#9876;</span>
            <i class="fas fa-heart heart"></i>
          </div>
        </div>
      </div>
      <h1>{{game.opponent.name}}</h1>
      <h2 v-if="opponent" height="150">{{opponent.name}}</h2>
      <opponent id="the-opp" />
    </div>
    <!-- <button class="fight" @click='fight({
      "playerId": game.player.id,
      "opponentId": game.opponent.id,
      "playerCardId": player.id,
      "opponentCardId": opponent.id,
      gameId: game.id,
    })'
    v-if="player && opponent"> -->

    <div class="player">
      <h2 v-if="player">{{player.name}}</h2>
      <player id="the-plyr" />
      <div class="player-hand">
        <div v-for="card in game.player.hand" @click="setPlayer(card)" :key="card.id">
          <div class="plyr-card">
            <img :src="card.img" height="150">
            <span class="defense">{{card.defense}}</span>
            <i class="fas fa-shield-alt shield"></i>
            <span class="attack">{{card.attack}}</span>
            <span class="health">{{card.health}}</span>
            <span class="swords">&#9876;</span>
            <i class="fas fa-heart heart"></i>
          </div>
        </div>
      </div>
      <h1>{{game.player.name}}</h1>
    </div>
    <!-- <button class="fight" @click='fight({
            "playerId": game.player.id,
            "opponentId": game.opponent.id,
            "playerCardId": player.id,
            "opponentCardId": opponent.id,
            gameId: game.id,
          })'
            v-if="player && opponent"> -->
  </div>
</template>

<script>
  import Player from "@/components/Player";
  import Opponent from "@/components/Opponent";


  export default {
    name: 'Game',
    data() {
      return {

      }
    },
    computed: {
      game() {
        return this.$store.state.game;
      },
      player() {
        return this.$store.state.player;
      },
      opponent() {
        return this.$store.state.opponent;
      },
      gameEnd() {
        this.$router.push({ name: "battleCards" });
      }
    },
    methods: {
      setPlayer(card) {
        debugger
        this.$store.dispatch("setPlayer", card);
      },
      setOpponent(card) {
        debugger
        this.$store.dispatch("setOpponent", card);
      }
    },
    components: {
      Opponent,
      Player
    }
  }

</script>

<style>


</style>
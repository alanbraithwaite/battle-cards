<template>
  <div v-if="game.id" class="game">
    <div v-if="game.winner">{{gameEnd}}</div>
    <button @click="quit(game.id)">Quit Game</button>
    <h2 class="o-card-count">Opponent Cards remaining: {{game.opponent.remainingCards + game.opponent.hand.length}}</h2>
    <div class="dead">
      <div class="plyr-card" v-if="game.opponent.deadCards[0]">
        <span class="defense">{{game.opponent.deadCards[0].defense}}</span>
        <i class="fas fa-shield-alt shield"></i>
        <span class="attack">{{game.opponent.deadCards[0].attack}}</span>
        <span class="swords">&#9876;</span>
        <span class="health">{{game.opponent.deadCards[0].health}}</span>
        <i class="fas fa-heart heart"></i>
        <img :src="game.opponent.deadCards[0].img" height="150">
        <span class="name">{{game.opponent.deadCards[0].name}}</span>
      </div>
    </div>


    <div class="opponent">
      <h1>{{game.opponent.name}}</h1>
      <div class="row opponent-hand justify-content-center">
        <div v-for="card in game.opponent.hand" @click="setOpponentCard(card)" :key="card.id">
          <img v-if="!card.visible" src="@/assets/Card_back_Power_Core.png" class="hidden" height="150">
          <div class="opp-card" v-else-if="card.visible">
            <img :src="card.img" height="150">
            <span class="defense">{{card.defense}}</span>
            <i class="fas fa-shield-alt shield"></i>
            <span class="attack">{{card.attack}}</span>
            <span class="swords">&#9876;</span>
            <span class="health">{{card.health}}</span>
            <i class="fas fa-heart heart"></i>
            <span>{{card.name}}</span>
          </div>
        </div>
      </div>
      <h2 v-if="opponentCard">{{opponentCard.name}}</h2>
      <opponentCard id="the-opp" />
    </div>
    <button class="duel" @click="duel()" v-if="playerCard && opponentCard">
      <img alt="Vue logo" src="../assets/logo.png" height="25">Play</button>

    <div class="player">
      <h2 v-if="playerCard">{{playerCard.name}}</h2>
      <playerCard id="the-plyr" />
      <div class="row player-hand  ">
        <div v-for="card in game.player.hand" @click="setPlayerCard(card) " :key="card.id">
          <div class="plyr-card">
            <span class="defense">{{card.defense}}</span>
            <i class="fas fa-shield-alt shield"></i>
            <span class="attack">{{card.attack}}</span>
            <span class="swords">&#9876;</span>
            <span class="health">{{card.health}}</span>
            <i class="fas fa-heart heart"></i>
            <img :src="card.img" height="150">
            <span class="name">{{card.name}}</span>
          </div>
        </div>
      </div>
      <h1>{{game.player.name}}</h1>
      <h2 class="p-card-count">Your Cards remaining: {{game.player.remainingCards + game.player.hand.length}}</h2>
    </div>

    <div class="dead">
      <div class="plyr-card" v-if="game.player.deadCards[0]">
        <span class="defense">{{game.player.deadCards[0].defense}}</span>
        <i class="fas fa-shield-alt shield"></i>
        <span class="attack">{{game.player.deadCards[0].attack}}</span>
        <span class="swords">&#9876;</span>
        <span class="health">{{game.player.deadCards[0].health}}</span>
        <i class="fas fa-heart heart"></i>
        <img :src="game.player.deadCards[0].img" height="150">
        <span class="name">{{game.player.deadCards[0].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import PlayerCard from "@/components/Player";
  import OpponentCard from "@/components/Opponent";


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
      playerCard() {
        return this.$store.state.playerCard;
      },

      opponentCard() {
        return this.$store.state.opponentCard;
      },
      gameEnd() {
        this.$router.push({ name: "battleCards" });
      }
    },
    mounted() {
      if (!this.game.id) {
        this.$store.dispatch("getGamebyId", this.$route.params.gameId);
      }
    },
    methods: {
      setPlayerCard(card) {
        this.$store.dispatch("setPlayerCard", card);
      },
      duel(obj) {
        this.$store.dispatch("duel");
      },
      setOpponentCard(card) {
        this.$store.dispatch("setOpponentCard", card);
      },
      quit(gameId) {
        this.$store.dispatch("quit", gameId);
      }
    },
    components: {
      OpponentCard,
      PlayerCard

    }
  }

</script>

<style>
  .opponent-hand {
    white-space: nowrap;
    border-image: 2px;
    padding: 10px;
    justify-content: flex-start
  }

  .player-hand {
    white-space: nowrap;
    border-image: 2px;
  }

  .plyr-card {
    /* padding: 10px; */
    border: solid blue;
  }

  #the-opp {
    justify-content: center;
  }
</style>
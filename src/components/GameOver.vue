<template>

  <div class="game-over">
    <div v-if="game.winner == game.player.name">
      <h1>You Kick Butt!</h1>
    </div>
    <div v-else-if="game.winner == game.opponent.name">
      <h1>Better luck next time Loser!</h1>
    </div>
    <div v-else>
      <h1>TIE! Not ever body <br>
        gets a trophy! <br>
        Get back out there <br>
        win this time!...<br>
      </h1>
    </div>
    <button @click="newGame(game.id)">Play Again</button>
  </div>

</template>

<script>
  export default {
    name: 'GameOver',
    data() {
      return {

      }
    },
    computed: {
      game() {
        return this.$store.state.game;
      }
    },
    methods: {
      newGame(gameId) {
        this.$store.dispatch("quit", gameId);
      }
    }
  };


</script>

<style>


</style>
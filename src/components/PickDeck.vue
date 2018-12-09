<template>
  <div class="">
    <img alt="Vue logo" src="../assets/logo.png" height="50">
    <h1>"Would you like to play a Game?:\>"</h1>
    <button @click="startGame" class="border rounded m-2">Start Game</button>
  </div>
</template>

<script>
  export default {
    name: 'PickDeck',
    data() {
      return {}
    },


    computed: {},


    methods: {
      pickDeck(deckNum) {
        this.$store.dispatch(pickDeck, deckNum);
      },
      startGame() {
        this.$store.dispatch("startGame", this.newGame)
      }
    }
  };

</script>

<style>


</style>
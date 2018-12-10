<template>
  <div>
    <div class="">
      <img alt="Vue logo" src="../assets/logo.png" height="50">
      <h1>"Would you like to play a Game?:\>" <br> Select Deck <br> Enter Name</h1>
    </div>
    <div class="sets">
      <input v-model="player" placeholder="Player Name here">
      <div @click="startGame(1,player)" class="set1 set">
        <p>Robots with necks!</p>
        <img src="https://robohash.org/YOUR-TEXT.png?set=set1" height="150">
      </div>
      <div @click="startGame(2,player)" class="set2 set">
        <p>Knuckle heads!</p>
        <img src="https://robohash.org/YOUR-TEXT.png?set=set2" height="150">
      </div>
      <div @click="startGame(3,player)" class="set3 set">
        <p>Robots without necks!</p>
        <img src="https://robohash.org/YOUR-TEXT.png?set=set3" height="150">
      </div>
      <div @click="startGame(4,player)" class="set4 set">
        <p>Cat pack!</p>
        <img src="https://robohash.org/YOUR-TEXT.png?set=set4" height="150">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PickDeck',
    data() {
      return {
        player: ""
      }
    },


    computed: {},


    methods: {
      // pickDeck(deckNum) {
      //   this.$store.dispatch(pickDeck, deckNum);
      // },
      startGame(deckNum, playerName) {
        this.$store.dispatch("startGame", deckNum, playerName)
      },

    }
  };

</script>

<style>


</style>
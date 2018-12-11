<template>
  <div>
    <div class="">
      <img alt="Vue logo" src="../assets/logo.png" height="50">
      <h1>"Would you like to play a Game?:\>" <br> Select Deck <br> Enter Name</h1>
    </div>
    <div>
      <form action="">
        <div class="sets">
          <input v-model="player" placeholder="Player Name here">
          <div @click="startGame(1,_player)" class="set1 set">
            <p>Robots with necks!</p>
            <img src="https://robohash.org/hellohal?set=set1" height="150">
          </div>
          <div @click="startGame(2,_player)" class="set2 set">
            <p>Knuckle heads!</p>
            <img src="https://robohash.org/hellohal?set=set2" height="150">
          </div>
          <div @click="startGame(3,_player)" class="set3 set">
            <p>Robots without necks!</p>
            <img src="https://robohash.org/hellohal?set=set3" height="150">
          </div>
          <div @click="startGame(4,_player)" class="set4 set">
            <p>Cat pack!</p>
            <img src="https://robohash.org/hellohal?set=set4" height="150">
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'PickDeck',
    data() {
      return {
        _player: ""

      }
    },


    computed: {
      player: {
        get: function () {
          return this._player;
        },
        set: function (newValue) {
          this._player = newValue;
        }
      }

    },


    methods: {
      startGame(deckNum, playerName) {
        console.log("PNAME START", playerName)
        console.log("deckNum START", deckNum)
        let payLoad = { "deckNum": deckNum, "playerName": playerName }
        // this.$store.dispatch("startGame", deckNum, playerName)
        this.$store.dispatch("startGame", payLoad)

      }

    }
  };

</script>

<style>


</style>
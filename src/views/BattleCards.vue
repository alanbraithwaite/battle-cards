<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col" justify-center>
        <!-- <pickDeck /> -->
        <pickDeck v-if="!game.id" />
        <!-- <gameOver v-if="game.id" /> -->
      </div>
    </div>
  </div>
</template>

<script>
  // @is an alias to / src
  import pickDeck from "@/components/PickDeck.vue"
  // import deck from "@/components/GameOver.vue"


  export default {
    name: 'home',
    data() {
      return {
        // newGame: {}
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },

    components: {
      // newGame: {}
      pickDeck,
      // GameOver
    },

    methods: {

    },

    // mounted() {
    //   this.$store.dispatch('newGame')

    // },

  }
</script>
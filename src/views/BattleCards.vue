<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col" justify-center>
        <pickDeck v-if="!game.id" />
        <gameOver v-if="game.id" />
      </div>
    </div>
  </div>
</template>

<script>
  import PickDeck from "@/components/PickDeck.vue"
  import GameOver from "@/components/GameOver.vue"


  export default {
    name: 'BattleCards',
    data() {
      return {
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },

    components: {
      PickDeck,
      GameOver
    },

  }
</script>
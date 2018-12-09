<template>
  <div v-if="game.id" class="game">
    <div v-if="game.winner">{{gameEnd}}</div>

  </div>
</template>

<script>
  import player from "@/components/player";
  import opponent from "@/components/opponent";


  export default {
    name: 'Game',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>
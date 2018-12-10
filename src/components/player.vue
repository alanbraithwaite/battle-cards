<template>
  <div class="player container-fluid" v-if="player">
    <div class="row">
      <div class="plyr-card">
        <img :src="player.img" height="150">
        <span class="defense">{{card.defense}}</span>
        <i class="fas fa-shield-alt shield"></i>
        <span class="attack">{{card.attack}}</span>
        <span class="health">{{card.health}}</span>
        <span class="swords">&#9876;</span>
        <i class="fas fa-heart heart"></i>
        <span class="health">{{card.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Player',
    data() {
      return {}
    },

    computed: {
      player() {
        return this.$store.state.player;
      }
    },
    methods: {}
  }

</script>

<style>


</style>
<template>
  <div class="player" v-if="card">
    <div class="plyr-card">
      <img :src="card.img" height="150">
      <span class="defense">{{card.defense}}</span>
      <i class="fas fa-shield-alt shield"></i>
      <span class="attack">{{card.attack}}</span>
      <span class="swords">&#9876;</span>
      <span class="health">{{card.health}}</span>
      <i class="fas fa-heart heart"></i>
      <span class="health">{{card.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayerCard',
    data() {
      return {}
    },

    computed: {
      card() {
        return this.$store.state.playerCard;
      }
    },
    methods: {}
  }

</script>

<style>


</style>
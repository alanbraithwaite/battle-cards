<template>
  <div class="opponent" container-fluid>
    <div class="row opponent">
      <div class="opponent" v-if="card">
        <img v-if="!card.visible" src="@/assets/Card_back_Power_Core.png" class="hidden">
        <div class="opp-card" v-else-if="card.visible">
          <img :src="card.img" height="150">
          <span class="defense">{{card.defense}}</span>
          <i class="fas fa-shield-alt shield"></i>
          <span class="attack">{{card.attack}}</span>
          <span class="swords">&#9876;</span>
          <span class="health">{{card.health}}</span>
          <i class="fas fa-heart heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OpponentCard',
    data() {
      return {}
    },

    computed: {
      card() {
        return this.$store.state.opponentCard;
      }
    },

    methods: {}
  }

</script>

<style>
  .opponent {
    white-space: nowrap;
  }
</style>
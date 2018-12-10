<template>
  <div class="opponent" container-fluid>
    <div class="row opponent">
      <div class="opponent" v-if="opponent">
        <img v-if="!opponent.visible" src="@/assets/Card_back_Power_Core.png" class="hidden">
        <div class="opp-card" v-else-if="opponent.visible">
          <img :src="opponent.img" height="150">
          <span class="defense">{{opponent.defense}}</span>
          <i class="fas fa-shield-alt shield"></i>
          <span class="attack">{{opponent.attack}}</span>
          <span class="health">{{opponent.health}}</span>
          <span class="swords">&#9876;</span>
          <i class="fas fa-heart heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Opponent',
    data() {
      return {}
    },

    computed: {
      opponent() {
        return this.$store.state.opponent;
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
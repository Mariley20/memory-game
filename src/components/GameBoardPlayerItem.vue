<template>
  <div
    class="player-item"
    :class="{'player-item--is-playing': isPlaying}"
  >
    player {{ player.id }}
    <div>move: {{ moves }}</div>
    <div>points: {{ points }}</div>
  </div>
</template>

<script>
export default {
  props: {
    player: { type: Object, default: null },
    index: { type: Number, default: 0 }
  },
  computed: {
    moves () {
      return this.player.moves
    },
    points () {
      return this.player.points
    },
    isPlaying () {
      return this.player.isPlaying
    }
  }
}
</script>

<style lang="scss" scoped>
.player-item {
  &--is-playing {
    background-color: pink ;
  }
}
</style>

<template>
  <div>
    <!--  -->
    <div>Time:</div>
    <div>memory:</div>
    <div>Players Ranking:</div>
    <div>
      <GameBoardPlayerItem
        v-for="(playerItem, index) in playersSort"
        :key="index"
        :index="index + 1"
        :player="playerItem"
      />
    </div>
  </div>
</template>

<script>
import GameBoardPlayerItem from '../components/GameBoardPlayerItem.vue'

export default {
  components: {
    GameBoardPlayerItem
  },
  props: {
    players: { type: Array, default: () => [] },
    gameSettings: { type: Object, default: null }
  },
  computed: {
    playersSort () {
      const players = JSON.parse(JSON.stringify(this.players))
      return players.sort((a, b) => b.points - a.points)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

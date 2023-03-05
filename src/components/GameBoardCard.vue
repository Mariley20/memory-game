<template>
  <div class="game-board">
    <div>
      <div>Time 00:01</div>
      <button>Restart</button>
      <button>New Game</button>
    </div>
    <GameBoardNumbers
      :style="boardSizeVarCss"
      :number-board-elements="numberBoardElements"
      @change:player="handleChangePlayer"
    />

    <div class="game-board__players">
      <GameBoardPlayerItem
        v-for="(playerItem, index) in players"
        :key="index"
        :index="index + 1"
        :player="playerItem"
      />
    </div>
  </div>
</template>

<script>
import { BOARD_SIZES } from '../constants/boardSizes'
import GameBoardNumbers from '../components/GameBoardNumbers.vue'
import GameBoardPlayerItem from '../components/GameBoardPlayerItem.vue'

export default {
  components: {
    GameBoardNumbers, GameBoardPlayerItem
  },
  props: {
    gameSettings: { type: Object, default: null }
  },
  data () {
    return {
      // playerIdOnDuty: '',
      boardItemsSelected: [],
      boardElements: [],
      players: []
    }
  },
  computed: {
    boardSizeVarCss () {
      let varCssValue = ''
      for (let index = 0; index < this.boardSize; index++) {
        varCssValue += '1fr '
      }

      return { '--grid-template-columns': varCssValue.trim() }
    },
    boardSize () {
      return this.boardSizeData.size
    },
    numberBoardElements () {
      const boardSize = this.boardSizeData.size
      return boardSize * boardSize
    },
    boardSizeData () {
      return BOARD_SIZES.find(item => item.id === this.gameSettings.boarSizeId)
    },

    numberPlayers () {
      return this.gameSettings.numbersPlayers
    },
    playerIdOnDuty () {
      const player = this.players.find(item => item.isPlaying)
      return player?.id || ''
    }
  },
  watch: {
    numberPlayers (newValue, oldValue) {
      this.getPlayers()
    }
  },
  created () {
    this.getPlayers()
  },
  methods: {
    handleBoardItemClick (item) {
      //
    },
    handleUpdateEndDate (item) {
      //
    },
    handleIncreasePlayerMovements (item) {
      //
    },
    handleChangePlayer ({ isPoint }) {
      const playerIndex = this.players.findIndex(item => item.isPlaying)
      const nextPlayerIndex = (playerIndex + 1) < this.players.length ? playerIndex + 1 : 0

      this.players.forEach((player, index) => {
        if (player.id === this.playerIdOnDuty) {
          const { moves, points } = player
          this.players[index].moves = moves + 1
          this.players[index].points = isPoint ? points + 1 : points
          this.players[index].isPlaying = false
        }
      })
      this.players[nextPlayerIndex].isPlaying = true
    },
    getPlayers () {
      this.players = []

      for (let index = 0; index < this.numberPlayers; index++) {
        this.players.push({
          id: `player_${index}`,
          moves: 0,
          points: 0,
          isPlaying: false
        })
      }
      if (this.players.length) {
        this.players[0].isPlaying = true
      }
      // this.playerIdOnDuty = this.players.length ? this.players[0].id : ''
    }

  }
}
</script>

<style lang="scss" scoped>
.game-board{
  &__players {
    display: flex;
  }
}
</style>

<template>
  <div>
    <div
      v-if="screenCurrent === SCREEN_START"
      class="settings-card"
    >
      <div>Select Theme</div>
      <div class="settings-card__themes">
        <button
          v-for="(boardTheme, i) in boardThemes"
          :key="i"
          @click="selectBoardTheme(boardTheme)"
        >
          {{ boardTheme.text }}
        </button>
      </div>
      <div>Numbers Players</div>
      <div class="settings-card__themes">
        <button
          v-for="numberPlayer in numberPlayersAllowed"
          :key="numberPlayer"
          @click="selectNumberPlayer(numberPlayer)"
        >
          {{ numberPlayer }}
        </button>
      </div>
      <div>Grid Size</div>
      <div class="settings-card__themes">
        <button
          v-for="(boarType, i) in boardSizes"
          :key="i"
          @click="selectBoarType(boarType)"
        >
          {{ boarType.text }}
        </button>
      </div>

      <button @click="startGame">
        Start Game
      </button>
    </div>
    <GameBoardCard
      v-if="screenCurrent === SCREEN_BOARD"
      :game-settings="gameSettings"
      :players="players"
    />
  </div>
</template>

<script>
import { BOARD_THEMES, BOARD_THEME_NUMBERS_ID } from '@/constants/boardThemes'
import { BOARD_SIZES, BOARD_SIZE_FOUR_ID } from '@/constants/boardSizes'
import GameBoardCard from '@/components/GameBoardCard.vue'

const SCREEN_START = 'SCREEN_START'
const SCREEN_BOARD = 'SCREEN_BOARD'
// const SCREEN_GAME_OVER = 'SCREEN_GAME_OVER'

export default {
  name: 'HomeView',
  components: { GameBoardCard },
  data () {
    return {
      players: [],
      boardThemes: BOARD_THEMES,
      boardSizes: BOARD_SIZES,
      numberPlayersAllowed: 4,
      gameSettings: {
        boardThemeId: BOARD_THEME_NUMBERS_ID,
        numbersPlayers: 1,
        boarSizeId: BOARD_SIZE_FOUR_ID,
        startTime: '',
        endTime: '',
        finished: false
      },
      SCREEN_BOARD,
      SCREEN_START,
      screenCurrent: SCREEN_START
    }
  },
  computed: {
    name () {
      return this.data
    }
  },
  methods: {
    selectBoardTheme (boardTheme) {
      console.log('boardTheme', boardTheme)
      this.gameSettings.boardThemeId = boardTheme.id
    },
    selectNumberPlayer (numberPlayer) {
      this.gameSettings.numbersPlayers = numberPlayer
    },
    selectBoarType (boarSize) {
      console.log('boarSize', boarSize)
      this.gameSettings.boarSizeId = boarSize.id
    },
    startGame () {
      this.screenCurrent = SCREEN_BOARD
      this.gameSettings.startTime = new Date()
    }
  }
}
</script>

<style lang="scss">
.settings-card {
  padding: 20px;

}
</style>

<template>
  <div class="game-board-numbers">
    <div
      v-for="(item, j) in boardElements"
      :key="j"
      class="game-board-numbers__item"
      :class="{ 'game-board-numbers__item--show': item.show ,
                'game-board-numbers__item--disabled': item.show || disabledBoard}"
      @click.prevent="handleBoardItemClick(item)"
    >
      {{ item.value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberBoardElements: { type: Number, default: 0 }
  },
  data () {
    return {
      boardItemsSelected: [],
      boardElements: [],
      disabledBoard: false
    }
  },
  computed: {
    boardElementsValues () {
      return this.boardElements.map(item => item.value)
    },

    areThereHiddenBoardElements () {
      return this.boardElements.some(item => item.show === false)
    }
  },
  watch: {
    numberBoardElements (newValue, oldValue) {
      this.getBoardElements()
    },
    areThereHiddenBoardElements (newValue, oldValue) {
      if (!newValue) {
        this.$emit('game-over')
      }
    }
  },
  created () {
    this.getBoardElements()
  },
  methods: {
    handleBoardItemClick (item) {
      this.disabledBoard = true
      this.boardItemsSelected.push(item)
      this.boardElements.forEach((boardItem, index) => {
        if (boardItem.id === item.id) {
          this.boardElements[index].show = true
        }
      })
      if (this.boardItemsSelected.length < 2) {
        this.disabledBoard = false
        return
      }
      const [firstItem, secondItem] = this.boardItemsSelected
      this.boardItemsSelected = []

      if (firstItem.value === secondItem.value) {
        setTimeout(() => {
          this.$emit('change:player', { isPoint: true })
          this.disabledBoard = false
        }, 1000)
      } else {
        setTimeout(() => {
          this.boardElements.forEach((boardItem, index) => {
            if (boardItem.id === firstItem.id) {
              this.boardElements[index].show = false
            }
            if (boardItem.id === secondItem.id) {
              this.boardElements[index].show = false
            }
          })
          this.disabledBoard = false
          this.$emit('change:player', { isPoint: false })
        }, 1000)
      }
    },

    getBoardElements () {
      this.boardElements = []
      let counter = 0
      do {
        const numberValue = Math.floor(Math.random() * 100) + 1
        if (!this.boardElementsValues.includes(numberValue)) {
          const number1 = {
            id: `index_${counter}`,
            value: numberValue,
            show: false
          }
          const number2 = {
            id: `index_${counter}d`,
            value: numberValue,
            show: false
          }
          this.boardElements.push(...[number1, number2])

          counter = counter + 1
        }
      } while (counter < this.numberBoardElements / 2)

      return this.boardElements.sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<style lang="scss" scoped>
.game-board-numbers {
  display: grid;
  grid-template-columns: var(--grid-template-columns);

  &__item {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    color: white;
  }

  &__item--show {
    color: black;
  }

  &__item--disabled {
    pointer-events: none;

    /* for "disabled" effect */
    opacity: 0.5;
    background: #CCC;
  }
}
</style>

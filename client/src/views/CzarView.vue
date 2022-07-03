<template>
  <div class="container">
    <div class="black-card-container">
      <card :isWhite="false" :text="currentBlackCard"></card>
    </div>
    <div class="czar-selections" v-if="playerSelections.length > 0">
      <div class="prev-selection">
        <card
          :isWhite="true"
          :text="playerSelections[czarPrevSelectionIndex]"
        ></card>
      </div>
      <div class="current-selection fade">
        <card
          :isWhite="true"
          :text="playerSelections[czarCurrSelectionIndex]"
        ></card>
      </div>
      <div class="next-selection fade">
        <card
          :isWhite="true"
          :text="playerSelections[czarNextSelectionIndex]"
        ></card>
      </div>

      <a class="prev" @click="changeSelection(-1)">&#10094;</a>
      <a class="next" @click="changeSelection(1)">&#10095;</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Card from "../components/Card.vue";

export default defineComponent({
  name: "CzarView",
  components: { Card },
  props: {
    currentBlackCard: String,
    playerSelections: Array,
  },
  data() {
    return {
      czarPrevSelectionIndex: 0,
      czarCurrSelectionIndex: 1,
      czarNextSelectionIndex: 2,
    };
  },
  methods: {
    changeSelection(iteration) {
      let length = this.playerSelections.length;

      const updateSelection = (index) => {
        index = index + iteration;

        if (index < 0) {
          index = length - 1;
        } else if (index === length) {
          index = 0;
        }

        return index;
      };

      this.czarPrevSelectionIndex = updateSelection(
        this.czarPrevSelectionIndex
      );
      this.czarCurrSelectionIndex = updateSelection(
        this.czarCurrSelectionIndex
      );
      this.czarNextSelectionIndex = updateSelection(
        this.czarNextSelectionIndex
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  height: 100%;
}

.black-card-container {
  display: flex;
  justify-content: space-evenly;
  height: 250px;
}

.czar-selections {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transform-origin: bottom;
  animation: flyup 0.5s;
  position: relative;
  .white-card {
    margin-bottom: -70%;
    animation: none;
  }
}

.prev-selection,
.next-selection {
  filter: blur(4px);
  transform: scale(0.8);
  .white-card {
    cursor: default;
  }
}

.current-selection .white-card {
  cursor: default;
}

.prev,
.next {
  cursor: pointer;
  z-index: 999;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

@keyframes flyup {
  0% {
    transform: translateX(100vh);
  }
}
</style>

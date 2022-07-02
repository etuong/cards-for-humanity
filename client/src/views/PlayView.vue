<template>
  <section class="section">
    <splitpanes class="default-theme">
      <pane :size="65">
        <div
          v-if="test && test.cards"
          class="container player-selection"
          id="card-panel"
          :class="{ 'white-cards': isMobile }"
        >
          <card
            v-for="(card, index) in test.cards"
            :key="index"
            :isWhite="true"
            :text="card"
            :hoverable="isMobile"
            :style="{ position: isMobile ? 'relative' : 'absolute' }"
          ></card>
        </div>
      </pane>

      <pane v-if="!isMobile" :size="35">
        <div class="czar container">
          <div class="black-card-container">
            <card :isWhite="false" :text="black"></card>
          </div>
          <div class="czar-selections">
            <div class="prev-selection" @click="changeSelection(-1)">
              <card
                :isWhite="true"
                :text="playerSelections[czarPrevSelectionIndex]"
              ></card>
            </div>
            <div class="current-selection">
              <card
                :isWhite="true"
                :text="playerSelections[czarCurrSelectionIndex]"
              ></card>
            </div>
            <div class="next-selection" @click="changeSelection(1)">
              <card
                :isWhite="true"
                :text="playerSelections[czarNextSelectionIndex]"
              ></card>
            </div>
          </div>
        </div>
      </pane>
    </splitpanes>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import Card from "../components/Card.vue";
import "splitpanes/dist/splitpanes.css";

export default defineComponent({
  name: "PlayView",
  components: {
    Splitpanes,
    Pane,
    Card,
  },
  props: {
    currentPlayer: Object,
  },
  data() {
    return {
      isMobile:
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
      // Test data
      test: { cards: ["a", "b", "c", "d", "e", "f", "g", "h", "i"] },
      playerSelections: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
      black: "b",
      czarPrevSelectionIndex: 0,
      czarCurrSelectionIndex: 1,
      czarNextSelectionIndex: 2,
    };
  },
  methods: {
    changeSelection(iteration) {
      let length = this.playerSelections.length;

      const updateSelection = (index, iteration) => {
        index = index + iteration;

        if (index < 0) {
          index = length - 1;
        } else if (index === length) {
          index = 0;
        }

        return index;
      };

      this.czarPrevSelectionIndex = updateSelection(
        this.czarPrevSelectionIndex,
        iteration
      );
      this.czarCurrSelectionIndex = updateSelection(
        this.czarCurrSelectionIndex,
        iteration
      );
      this.czarNextSelectionIndex = updateSelection(
        this.czarNextSelectionIndex,
        iteration
      );
    },
  },
  mounted() {
    $(`.player-selection .white-card`).mousedown(function () {
      $(".selected-card").removeClass("selected-card").css("z-index", "0");
      $(this).addClass("selected-card").css("z-index", "100");
    });
    if (!this.isMobile) {
      $(`.player-selection .white-card`).draggable({
        stack: "div",
        containment: "parent",
      });
      var cards = document.querySelectorAll(".player-selection .white-card");
      for (var card of cards) {
        $(card).css({
          left: Math.random() * ($("#card-panel").width() - $(card).width()),
          top: Math.random() * ($("#card-panel").height() - $(card).height()),
        });
      }
    }
  },
});
</script>

<style scoped>
.section {
  padding: 0;
  height: 100%;
}

.container {
  padding: 10px;
  height: 100%;
}

.selected-card {
  border: 0.15em solid black;
}

.black-card-container {
  display: flex;
  justify-content: space-evenly;
  height: 250px;
}

.white-cards {
  width: 100%;
  overflow-y: auto;
  flex: 1;
  padding: 10px 0;
}

.white-cards .white-card {
  margin: 0 auto;
}

.czar.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.czar-selections {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transform-origin: bottom;
  animation: flyup 0.5s;
}

.czar-selections .white-card {
  margin-bottom: -70%;
  animation: none;
}

.prev-selection,
.next-selection {
  filter: blur(4px);
  transform: scale(0.8);
}

.current-selection .white-card,
.prev-selection .white-card,
.next-selection .white-card {
  cursor: pointer;
}

@keyframes flyup {
  0% {
    transform: translateY(100vh);
  }
}
</style>

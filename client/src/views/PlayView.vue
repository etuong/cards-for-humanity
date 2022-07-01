<template>
  <section class="section">
    <splitpanes class="default-theme">
      <pane :size="70">
        <div
          v-if="test && test.cards"
          class="container"
          id="card-panel"
          :class="{ 'white-cards': isMobile }"
        >
          <card
            v-for="(card, index) in test.cards"
            :key="index"
            :isWhite="true"
            :text="card"
            :hoverable="isMobile"
          ></card>
        </div>
      </pane>

      <pane v-if="!isMobile" :size="30">
        <div class="container">
          <div class="black-card-container">
            <card :isWhite="false" :text="black"></card>
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
      isMobile: false,
      test: { cards: ["a", "b", "c", "d", "e", "f", "g", "h", "i"] },
      black: "b",
    };
  },
  methods: {},
  mounted() {
    $(`.white-card`).mousedown(function () {
      $(".selected-card").removeClass("selected-card").css("z-index", "0");
      $(this).addClass("selected-card").css("z-index", "100");
    });
    if (!this.isMobile) {
      $(`.white-card`).draggable({
        stack: "div",
        containment: "parent",
      });
      var cards = document.querySelectorAll(".white-card");
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
</style>

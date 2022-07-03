<template>
  <div
    v-if="currentPlayer && currentPlayer.cards"
    class="player-selection"
    :class="{ 'white-cards': isMobile }"
  >
    <div class="card-container" id="card-panel">
      <card
        v-for="(card, index) in currentPlayer.cards"
        :key="index"
        :isWhite="true"
        :text="card"
        :hoverable="isMobile"
        :style="{ position: isMobile ? 'relative' : 'absolute' }"
      ></card>
    </div>
    <div class="player-bar">
      <p>Test</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Card from "../components/Card.vue";

export default defineComponent({
  name: "PlayerView",
  components: { Card },
  props: {
    currentPlayer: Object,
    isMobile: Boolean,
  },
  data() {
    return {};
  },

  methods: {},
  mounted() {
    $(".card-container .white-card").mousedown(function () {
      $(".selected-card").removeClass("selected-card").css("z-index", "0");
      $(this).addClass("selected-card").css("z-index", "100");
    });
    if (!this.isMobile) {
      $(".card-container .white-card").draggable({
        stack: "div",
        containment: "parent",
      });

      // Randomly place white cards on the table
      var cards = document.querySelectorAll(".card-container .white-card");
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

<style lang="scss" scoped>
.player-selection {
  height: 100%;
  width: auto;
  position: relative;

  .card-container {
    padding: 10px 10px 30px 10px;
    height: 100%;
  }

  .selected-card {
    border: 0.15em solid black;
  }

  .white-cards {
    width: 100%;
    overflow-y: auto;
    flex: 1;
    padding: 10px 0;
    .white-card {
      margin: 0 auto;
    }
  }

  .player-bar {
    width: 100%;
    background-color: black;
    color: white;
    font-size: 15px;
    padding: 5px;
    z-index: 10000;
    position: absolute;
    bottom: 0;
  }
}
</style>

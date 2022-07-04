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
        @click="selectCard(index, card)"
        :hoverable="isMobile"
        :style="{ position: isMobile ? 'relative' : 'absolute' }"
      />
    </div>
    <div class="player-bar">
      <p>{{ message }}</p>
      <button
        :disabled="!enableConfirmationBtn"
        class="button is-primary is-small"
        @click="submitSelection"
      >
        <strong>Select!</strong>
      </button>
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
    playerMessage: String,
  },
  data() {
    return {
      enableConfirmationBtn: false,
      hasPlayerSelected: false,
      message: this.playerMessage,
      selected_card: [],
    };
  },

  methods: {
    selectCard(id, card) {
      if (!this.hasPlayerSelected) {
        this.selected_card = [id, card];
        this.message = card;
        this.enableConfirmationBtn = true;
      }
    },
    submitSelection() {
      this.$socket.emit("white_card_submission", {
        roomId: this.currentPlayer.roomId,
        playerId: this.currentPlayer.id,
        selection: this.selected_card[1],
      });
      this.message = "Waiting on other players";
      this.enableConfirmationBtn = false;
      this.hasPlayerSelected = true;
      document.querySelector(".clicked-card").classList.add("selected-card");
    },
  },
  mounted() {
    $(".card-container .white-card").mousedown((e) => {
      $(".clicked-card").css("z-index", "0");
      $(e.currentTarget).css("z-index", "100");
      if (!this.hasPlayerSelected) {
        $(".clicked-card").removeClass("clicked-card");
        $(e.currentTarget).addClass("clicked-card");
      }
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
  watch: {
    playerMessage(newMessage) {
      this.message = newMessage;
    },
  },
});
</script>

<style lang="scss" scoped>
.player-selection {
  height: 100%;
  width: auto;
  position: relative;

  .card-container {
    padding: 5px 5px 40px 5px;
    height: 100%;
  }

  .clicked-card {
    border: 0.15em solid black;
  }

  .selected-card {
    border: 0.15em solid red;
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
    display: flex;
    align-items: center;
    .button {
      margin-left: auto;
    }
  }
}
</style>

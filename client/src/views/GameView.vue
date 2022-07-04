<template>
  <div class="is-fixed-top message-bar">
    <p>{{ message }}</p>
  </div>
  <section class="section">
    <splitpanes class="default-theme">
      <pane :size="65" v-if="!amICurrentCzar">
        <player-view
          :currentPlayer="currentPlayer"
          :playerMessage="playerMessage"
          :isMobile="isMobile"
        ></player-view>
      </pane>

      <pane v-if="!isMobile" :size="35">
        <czar-view
          :playerSelections="playerSelections"
          :currentBlackCard="currentBlackCard"
          :amICurrentCzar="amICurrentCzar"
          :czarMessage="czarMessage"
        ></czar-view>
      </pane>
    </splitpanes>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import PlayerView from "./PlayerView.vue";
import CzarView from "./CzarView.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default defineComponent({
  name: "PlayView",
  components: {
    PlayerView,
    CzarView,
    Splitpanes,
    Pane,
    CzarView,
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
      amICurrentCzar: false,
      currentCzar: "",
      currentBlackCard: "",
      message: "",
      playerMessage: "Please choose a white card to fill in the blank",
      czarMessage:
        "Please wait for the other players to select their white card",
      playerSelections: [],
    };
  },
  methods: {},
  sockets: {
    update_playground(data) {
      this.currentCzar = data.currentCzar;
      this.currentBlackCard = data.currentBlackCard;
      this.amICurrentCzar = this.currentPlayer.name === data.currentCzar.name;
      this.message = `${data.publicMessage}`;
    },
    czar_chooses(data) {
      this.playerSelections = data.playerSelections;
      this.message = `All players have selected a white card. Czar ${this.currentCzar} will now choose his favorite!`;
      this.playerMessage = `Waiting on Czar ${this.currentCzar}`;
      this.czarMessage = "Please select your favorite answer!";
    },
  },
});
</script>

<style lang="scss" scoped>
.section {
  padding: 32px 0 0 0;
  height: 100%;
}

.message-bar {
  width: 100%;
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px;
  z-index: 10000;
  position: fixed;
  height: 32px;
}
</style>

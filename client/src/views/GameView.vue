<template>
  <div class="is-fixed-top message-bar">
    <p>{{ message }}</p>
  </div>
  <section class="section">
    <splitpanes class="default-theme">
      <pane :size="65" v-if="!amICurrentCzar">
        <player-view
          :currentPlayer="currentPlayer"
          :isMobile="isMobile"
        ></player-view>
      </pane>

      <pane v-if="!isMobile" :size="35">
        <czar-view
          :playerSelections="playerSelections"
          :currentBlackCard="currentBlackCard"
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

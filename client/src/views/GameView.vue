<template>
  <div class="is-fixed-top message-bar">
    <p>
      Today is a good day, tomorrow is a bad day, how about yesterday? Let's add
      a little more text to add space.
    </p>
  </div>
  <section class="section">
    <splitpanes class="default-theme">
      <pane :size="65">
        <player-view
          :currentPlayer="currentPlayer"
          :isMobile="isMobile"
        ></player-view>
      </pane>

      <pane v-if="!isMobile" :size="35">
        <czar-view
          :playerSelections="playerSelections"
          :black="black"
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
      // Test data
      playerSelections: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
      black: "b",
    };
  },
  methods: {},
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
}
</style>

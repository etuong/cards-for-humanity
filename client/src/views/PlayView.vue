<template>
  <section class="section">
    <splitpanes class="default-theme">
      <pane>
        <div v-if="test && test.cards" class="container" id="card-panel">
          <div
            v-for="(card, index) in test.cards"
            :key="index"
            class="white-card"
          >
            <p>{{ card }}</p>
            <div className="card-logo">
              <img src="../assets/logo.png" alt="card logo" />
              <span>Cards For Humanity</span>
            </div>
          </div>
        </div>
      </pane>

      <pane>
        <div class="container"></div>
      </pane>
    </splitpanes>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default defineComponent({
  name: "PlayView",
  components: {
    Splitpanes,
    Pane,
  },
  props: {
    currentPlayer: Object,
  },
  data() {
    return {
      test: { cards: ["a", "b", "c", "d", "e", "f", "g", "h", "i"] },
    };
  },
  methods: {},
  mounted() {
    $(`.white-card`)
      .draggable({
        stack: "div",
        containment: "parent",
      })
      .mousedown(function () {
        $(".selected-card").css("z-index", "0").removeClass("selected-card");
        $(this).addClass("selected-card").css("z-index", "100");
      });
    var cards = document.querySelectorAll(".white-card");
    for (var card of cards) {
      $(card).css({
        left: Math.random() * ($("#card-panel").width() - $(card).width()),
        top: Math.random() * ($("#card-panel").height() - $(card).height()),
      });
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

.white-card,
.black-card {
  position: absolute;
  cursor: grab;
  font-weight: 700;
  padding: 13px;
  height: 225px;
  width: 163px;
  border-radius: 12px;
  border: 1px solid black;
  box-sizing: border-box;
}

.white-card {
  background-color: white;
}

.black-card {
  background-color: black;
  color: white;
  text-align: left;
  box-sizing: border-box;
}

.card-logo {
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 6px;
  bottom: 10px;
  left: 15px;
}

.card-logo img {
  height: 14px;
  margin-right: 3px;
}

.selected-card {
  border: 0.15em solid black;
}
</style>

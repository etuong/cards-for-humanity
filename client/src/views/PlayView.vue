<template>
  <section class="section">
    <splitpanes class="default-theme">
      <pane>
        <div class="container" id="test">
          <div v-for="index in 10" :key="index" class="white-card box">
            <p>Who really did 9/11</p>
            <div className="card-logo">
              <img src="../assets/logo.png" alt="card logo" />
              <span>Cards For Humanity</span>
            </div>
          </div>
        </div>
      </pane>

      <pane>
        <div class="container">
          <div v-for="index in 10" :key="index" class="black-card box">
            <p>A finger for a thumb</p>
            <div className="card-logo">
              <img src="../assets/logo.png" alt="card logo" />
              <span>Cards For Humanity</span>
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
import "splitpanes/dist/splitpanes.css";

export default defineComponent({
  name: "PlayView",
  components: {
    Splitpanes,
    Pane,
  },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    $(`.box`).draggable({
      stack: "div",
      containment: "parent",
    });

    var divs = document.querySelectorAll(".box");
    // var winWidth = document.querySelector("#test").clientWidth;
    // var winHeight = document.querySelector("#test").clientHeight;

    // i stands for "index". you could also call this banana or haircut. it's a variable
    for (var i = 0; i < divs.length; i++) {
      // // shortcut! the current div in the list
      var thisDiv = divs[i];

      // // get random numbers for each element
      // let randomTop = getRandomNumber(0, winHeight);
      // let randomLeft = getRandomNumber(0, winWidth);

      // // update top and left position
      // thisDiv.style.top = randomTop + "px";
      // thisDiv.style.left = randomLeft + "px";

      $(thisDiv).css({
        left: Math.random() * ($("#test").width() - $(thisDiv).width()),
        top: Math.random() * ($("#test").height() - $(thisDiv).height()),
      });
    }

    // function getRandomNumber(min, max) {
    //   return Math.random() * (max - min) + min;
    // }
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
</style>

<template>
  <Transition>
    <div class="slidein" v-if="open">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum,
        harum, quaerat porro, maiores facilis molestias illum impedit quo
        repellat enim provident perspiciatis molestiae in saepe id cupiditate
        eveniet asperiores.
      </p>
      <button class="close-btn" @click="open = false">X</button>
    </div>
  </Transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VictoryBoardModal",
  props: {
    victoryPairs: [],
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {},
  watch: {
    victoryPairs(newVictoryPairs) {
      this.open = true;
    },
  },
});
</script>

<style scoped>
.slidein {
  max-width: 600px;
  padding: 2em 3em;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  background: #ddd;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}
.v-enter-active,
.v-leave-active {
  transition: left 1s ease;
}

.v-enter-from,
.v-leave-to {
  left: -100%;
}

.close-btn {
  border: none;
  font-weight: bold;
  font-size: 2em;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
}

button {
  padding: 0.5em 1em;
  border-radius: 3em;
  font-size: 1.1em;
}

h1 {
  font-weight: 200;
}
</style>

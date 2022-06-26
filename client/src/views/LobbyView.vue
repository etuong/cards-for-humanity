<template>
  <section class="hero welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Hello, Admin.</h1>
        <h2 class="subtitle">Let's wait for other players!</h2>
        <h2 class="subtext">
          You are the Game Master so press the Start button when every player is
          ready :)
        </h2>
        <br />
        <button
          class="button is-danger is-medium"
          @click="toggleGameJoinerModal"
        >
          <strong>Start!</strong>
        </button>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="list has-hoverable-list-items">
        <div v-for="(player, index) in players" :key="index" class="list-item">
          <div class="list-item-title" data-letters="J"></div>
          <div class="list-item-content">
            <div class="list-item-title">{{player.name}}</div>
            <div class="list-item-description flash">{{player.ready}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LobbyView",
  components: {},
   props: {
    players: Array,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.info-tiles {
  margin: 1rem 0;
}

.subtext {
  margin-top: -1.25rem;
}

.section {
  padding: 0 1.5rem;
}

[data-letters]:before {
  content: attr(data-letters);
  display: inline-block;
  font-size: 1em;
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
  text-align: center;
  border-radius: 50%;
  border: 1px solid black;
  background: transparent;
  vertical-align: middle;
  margin-right: 1em;
  color: black;
}

.flash {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

<template>
  <section class="hero welcome is-small">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">Hello, {{ currentPlayer.name }}!</h1>
            <h2 class="subtext">Are you ready?</h2>
            <br />
            <button
              class="button is-info is-medium"
              @click="setPlayerReady"
              :disabled="currentPlayer.ready"
            >
              <strong>Ready!</strong>
            </button>
          </div>
          <div class="column">
            <h2 class="subtitle">Let's wait for other players</h2>
            <h2 class="subtext">
              We need at least 3 players to start. As soon as all players are
              ready, anyone can press the Start button!
            </h2>
            <br />
            <button
              class="button is-success is-medium"
              @click="toggleGameJoinerModal"
              :disabled="!playersData.isGameReady"
            >
              <strong>Start!</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div
        v-if="playersData && playersData.players"
        class="list has-hoverable-list-items has-visible-pointer-controls"
      >
        <div
          v-for="(player, index) in playersData.players"
          :key="index"
          class="list-item"
        >
          <div
            class="list-item-title"
            :data-letters="`${player.name.charAt(0).toUpperCase()}`"
          ></div>
          <div class="list-item-content">
            <div class="list-item-title">{{ player.name }}</div>
            <div
              class="list-item-description"
              :class="{ flash: !player.ready }"
            >
              {{ player.ready ? "Ready" : "Not ready" }}
            </div>
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
    playersData: Object,
    currentPlayer: Object,
  },
  data() {
    return { };
  },
  methods: {
    setPlayerReady() {
      this.$socket.emit("player_ready", this.currentPlayer);
    }
  },
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

.column {
  border-left: 1px solid #dbdbdb;
}

@media screen and (min-width: 800px) {
  .column {
    border-bottom: 1px solid #dbdbdb;
  }
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
  color: red;
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

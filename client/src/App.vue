<template>
  <div class="toggle">
    <button @click="toggle">Toggle SlideIn</button>
  </div>
  <transition name="slide">
    <div class="slidein" v-if="open">
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum,
        harum, quaerat porro, maiores facilis molestias illum impedit quo
        repellat enim provident perspiciatis molestiae in saepe id cupiditate
        eveniet asperiores.
      </p>
      <button class="close-btn" @click="toggle">X</button>
    </div>
  </transition>

  <nav-bar
    @show-view="showView"
    :playerName="currentPlayer && currentPlayer.name"
  />
  <div class="body-content">
    <home v-if="showHomeView" />
    <lobby v-if="showLobbyView" :currentPlayer="currentPlayer" />
    <game v-if="showGameView" :currentPlayer="currentPlayer" />
  </div>
  <FooterComponent />
</template>

<script>
import { defineComponent } from "vue";
import { toast } from "bulma-toast";
import FooterComponent from "@/components/Footer.vue";
import Game from "@/views/GameView.vue";
import Home from "@/views/HomeView.vue";
import Lobby from "@/views/LobbyView.vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: {
    FooterComponent,
    Game,
    Home,
    Lobby,
    NavBar,
  },
  data() {
    return {
      currentPlayer: undefined,
      showGameView: false,
      showHomeView: true,
      showLobbyView: false,
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    showView(view) {
      this.showHomeView = false;
      this.showLobbyView = false;
      this.showGameView = false;
      switch (view) {
        case "Home":
          this.showHomeView = true;
          break;
        case "Lobby":
          this.showLobbyView = true;
          break;
        case "Game":
          this.showGameView = true;
          break;
        default:
      }
    },
    showToast(message, type, duration = 3500) {
      toast({
        message,
        type,
        duration: duration,
        position: "bottom-right",
        animate: { in: "fadeIn", out: "fadeOut" },
      });
    },
  },
  sockets: {
    connected() {
      console.log("Application socket is connected!");
    },
    update_player(currentPlayer) {
      this.currentPlayer = currentPlayer;
    },
    show_home() {
      this.showView("Home");
      this.showToast(
        `Not enough players to play! Need at least 3 people :(`,
        "is-danger",
        5000
      );
      this.currentPlayer = undefined;
    },
    show_lobby() {
      this.showView("Lobby");
    },
    game_start() {
      this.showView("Game");
    },
    player_disconnect(quitter) {
      this.showToast(`Player ${quitter} has left the room`, "is-warning");
    },
    room_existed() {
      this.showToast(
        "Room with your password has been created! Please try again.",
        "is-danger"
      );
    },
    player_name_exist() {
      this.showToast(
        "Name has been taken. Please choose another name!",
        "is-danger"
      );
    },
    room_does_not_exist() {
      this.showToast(
        "Oops! This password does not exist in any room! Please try again.",
        "is-danger"
      );
    },
    room_full() {
      this.showToast("Sorry, this room is full!", "is-danger");
    },
    game_in_session() {
      this.showToast("Looks like the game has started!", "is-danger");
    },
  },
  mounted() {
    // Uncomment to call a mock server
    // this.$socket.emit("mock");
  },
});
</script>

<style scoped>
.body-content {
  flex: 1 0 auto;
  padding-top: 50px;
}

.slidein {
  max-width: 600px;
  padding: 2em 3em;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background: #ddd;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

/* before the element is shown, start off the screen to the right */
.slide-enter,
.slide-leave-active {
  right: -100%;
}

.close-btn {
  border: none;
  font-weight: bold;
  font-size: 2em;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5em;
}

.toggle {
  margin: 1em;
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

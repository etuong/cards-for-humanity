<template>
  <nav-bar @show-view="showView"></nav-bar>
  <div class="body-content">
    <home v-if="showHomeView"></home>
    <lobby
      v-if="showLobbyView"
      :playersData="playersData"
      :currentPlayer="currentPlayer"
    ></lobby>
    <play v-if="showPlayView"></play>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Home from "@/views/HomeView.vue";
import Lobby from "@/views/LobbyView.vue";
import Play from "@/views/PlayView.vue";
import { defineComponent } from "vue";
import { toast } from "bulma-toast";

export default defineComponent({
  components: {
    FooterComponent,
    NavBar,
    Home,
    Lobby,
    Play,
  },
  data() {
    return {
      showHomeView: true,
      showLobbyView: false,
      showPlayView: false,
      playersData: undefined,
      currentPlayer: undefined,
    };
  },
  methods: {
    showView(view) {
      this.showHomeView = false;
      this.showLobbyView = false;
      this.showPlayView = false;
      switch (view) {
        case "Home":
          this.showHomeView = true;
          break;
        case "Lobby":
          this.showLobbyView = true;
          break;
        case "Play":
          this.showPlayView = true;
        default:
      }
    },
    showToast(message, type) {
      toast({
        message,
        type,
        duration: 3500,
        position: "bottom-right",
        animate: { in: "fadeIn", out: "fadeOut" },
      });
    },
  },
  sockets: {
    connected() {
      console.log("Application socket is connected!");
    },
    update_players(data) {
      this.playersData = data;
      this.showView("Lobby");
    },
    update_player(currentPlayer) {
      this.currentPlayer = currentPlayer;
    },
    room_existed() {
      this.showToast(
        "Room with your password has been created! Please try again.",
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
});
</script>

<style scoped>
.body-content {
  flex: 1 0 auto;
  padding-top: 80px;
}
</style>

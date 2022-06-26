<template>
  <nav-bar></nav-bar>
  <div class="body-content">
    <home v-if="!gameInitialized"></home>
    <lobby v-if="gameInitialized" :players="players"></lobby>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/Footer.vue"; // @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Home from "@/views/HomeView.vue";
import Lobby from "@/views/LobbyView.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FooterComponent,
    NavBar,
    Home,
    Lobby
  },
  data() {
    return {
      gameInitialized: false,
      players: []
    }
  },
  sockets: {
    connected() {
      console.log("Application socket is connected!");
    },
    update_players(data) {
      this.players = data.players;
      this.gameInitialized = true;
    }
  },
});
</script>

<style scoped>
.body-content {
  flex: 1 0 auto;
  padding-top: 80px;
}
</style>

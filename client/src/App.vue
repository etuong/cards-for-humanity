<template>
  <nav-bar @show-view="showView"></nav-bar>
  <div class="body-content">
    <home v-if="showHomeView"></home>
    <lobby v-if="showLobbyView" :playersData="playersData"></lobby>
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
    Lobby,
  },
  data() {
    return {
      showHomeView: true,
      showLobbyView: false,
      playersData: undefined,
    };
  },
  methods: {
    showView(view) {
      this.showHomeView = false;
      this.showLobbyView = false;
      switch (view) {
        case "Home":
          this.showHomeView = true;
          break;
        case "Lobby":
          this.showLobbyView = true;
          break;
        default:
      }
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
  },
});
</script>

<style scoped>
.body-content {
  flex: 1 0 auto;
  padding-top: 80px;
}
</style>

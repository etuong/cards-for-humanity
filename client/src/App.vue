<template>
  <nav-bar></nav-bar>
  <div class="body-content">
    <home></home>
  </div>
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/Footer.vue"; // @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Home from "@/views/HomeView.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    FooterComponent,
    NavBar,
    Home,
  },
  sockets: {
    connected() {
      console.log("Ethan is here 1");
      this.$socket.emit("create_room", { name: "Happy" });
    },
  },
});
</script>

<style scoped>
.body-content {
  flex: 1 0 auto;
  padding: 20px;
}
</style>

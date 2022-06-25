<template>
  <nav-bar></nav-bar>
  <div class="body-content">
    <router-view />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "@/components/Footer.vue"; // @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: {
    FooterComponent,
    NavBar,
  },
});
</script>

<style scoped>
.body-content {
  flex: 1 0 auto;
  padding: 20px;
}
</style>

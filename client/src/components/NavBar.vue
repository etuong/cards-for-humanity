<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <img src="../assets/logo.png" class="logo" />
      <a class="navbar-item site-title" href="#">Cards For Humanity </a>
      <div class="navbar-burger burger" data-target="navbarExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/"> Home </a>
        <a class="navbar-item" href="/"> Scoreboard </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style scoped>
.navbar {
  padding: 15px;
}

.logo {
  width: 64px;
  height: 64px;
  max-height: auto;
}

.navbar-item.site-title {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: black;
  font-size: larger;
}
</style>

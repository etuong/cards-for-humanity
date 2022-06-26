<template>
  <footer class="section">
    <div class="container border-top">
      <div class="is-flex-tablet is-justify-content-end is-align-items-center">
        <p>
          Created by
          <a href="https://github.com/etuong/cards-for-humanity">Ethan Uong</a>
          👨‍💻
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
.border-top {
  border-top: 1px solid #dee2e6;
  padding-top: 15px;
}

footer {
  flex-shrink: 0;
  padding: 20px;
}
</style>

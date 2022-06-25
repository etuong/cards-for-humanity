<template>
  <section class="section">
    <div class="container">
      <div v-if="showModal">
        <room-creator @close="toggleModal" />
      </div>
      <div class="mb-6 pb-3 is-multiline">
        <div class="column is-12 is-9-desktop mx-auto has-text-centered">
          <h2 class="mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">
            Cards For Humanity
          </h2>
          <p class="subtitle has-text-grey mb-5">
            An adult party game in which players complete fill-in-the-blank
            statements using words or phrases typically deemed offensive, risqué
            or politically incorrect printed on playing cards
          </p>
        </div>
        <div class="buttons is-centered">
          <button class="button is-primary is-large" @click="toggleModal">
            <strong>Create a room</strong>
          </button>
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-4 is-6-desktop">
          <img
            class="mx-auto mt-0-widescreen is-block image"
            alt="Vue logo"
            src="../assets/logo.png"
          />
        </div>
        <div class="column is-12 is-6-desktop">
          <icon-text
            title="Setup"
            text="To start the game, create or join a room. Each player is dealt with ten White Cards."
          />
          <icon-text
            title="Game Play"
            text="Each player takes turn to be the Card Czar and plays a Black Card. Everyone else answers the question by choosing one White card that fills in the blank. The Card Czar shuffles all of the answers and shares each card combination and then picks a favorite. Whoever played that answer keeps the Black Card as one Awesome Point. Player with most points wins."
          />
          <icon-text
            title="House Rules"
            text="Be nice, but not too nice, and have fun!"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconText from "../components/IconText.vue";
import RoomCreator from "../components/RoomCreator.vue";

export default defineComponent({
  name: "HomeView",
  components: { IconText, RoomCreator },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
});
</script>

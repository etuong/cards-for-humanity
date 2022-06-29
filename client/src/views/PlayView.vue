<template>
  <section class="section">
    <div class="container">
      <div v-for="thing in things" class="white-card" :class="`box${thing.id}`">
        <p>Who really did 9/11</p>
        <div className="card-logo">
          <img src="../assets/logo.png" alt="card logo" />
          <span>Cards For Humanity</span>
        </div>
      </div>
      <div v-for="thing in things" class="black-card" :class="`box${thing.id}`">
        <p>A finger up the butt</p>
        <div className="card-logo">
          <img src="../assets/logo.png" alt="card logo" />
          <span>Cards For Humanity</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      things: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < this.things.length + 1; i++) {
      $(`.box${i}`).draggable({ stack: "div" });
    }
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.white-card,
.black-card {
  cursor: default;
  font-weight: 700;
  padding: 13px;
  height: 225px;
  width: 163px;
  border-radius: 12px;
  border: 1px solid black;
  text-align: center;
  box-sizing: border-box;
}

.white-card {
  background-color: white;
}

.black-card {
  background-color: black;
  color: white;
  text-align: left;
  box-sizing: border-box;
}

.white-card p {
  text-align: left;
}

.card-logo {
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 6px;
  bottom: 10px;
  left: 15px;
}

.card-logo img {
  height: 14px;
  margin-right: 3px;
}
</style>

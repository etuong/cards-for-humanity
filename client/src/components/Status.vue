<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th>Pick Card?</th>
        <th>View Winning Cards</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in 7">
        <td>Rebecca Bauch</td>
        <td>2</td>
        <td>
          <input
            type="checkbox"
            checked
            class="switch is-rounded is-outlined is-success"
          />
          <label class="switch-label"></label>
        </td>
        <td>
          <button
            class="button jb-modal"
            data-target="sample-modal"
            type="button"
          >
            <span class="icon">&#128065;</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Status",
  props: {},
  data() {
    return {
      playersData: undefined,
    };
  },
  methods: {},
  sockets: {
    update_players(data) {
      this.playersData = data;
    },
  },
});
</script>

<style lang="scss" scoped>
.table {
  font-size: 14px;
  border-bottom: 1px solid black;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  td {
    padding: 0.3em 0.75em;
  }
}

.switch-label {
  display: inline !important;
}

.button {
  font-size: 24px;
  height: 24px;
  border: none;
  background: transparent;
}
</style>

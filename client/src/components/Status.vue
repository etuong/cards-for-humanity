<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th>Pick Card?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Name">Rebecca Bauch</td>
        <td data-label="Company">2</td>
        <td data-label="Progress" class="is-progress-cell">
          <input
            type="checkbox"
            class="switch is-rounded is-outlined is-success"
          />
          <label class="switch-label"></label>
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
    return {};
  },
  methods: {},
});
</script>

<style scoped>
.switch-label {
  display: inline !important;
}
</style>

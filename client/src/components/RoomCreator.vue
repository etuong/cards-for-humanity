<template>
  <card-modal
    title="Create a room"
    transition="fade"
    class="section-xs"
    @cancel="close"
    @ok="createRoom"
  >
    <form class="columns is-multiline">
      <div class="field column is-12">
        <label class="label">Room Name</label>
        <div class="control">
          <input
            v-model="name"
            class="input"
            type="text"
            placeholder="Enter the name.."
            required
          />
        </div>
        <p v-if="errors['name']" class="help is-danger">
          You have to enter the name.
        </p>
      </div>

      <div class="field column is-6">
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="password"
            class="input"
            type="text"
            placeholder="Text input"
            :disabled="!isPrivate"
          />
        </div>
        <p v-if="errors['password']" class="help is-danger">
          Minimum password length is 3
        </p>
      </div>
    </form>
  </card-modal>
</template>

<script lang="ts">
import { CardModal } from "vue-bulma-modal";

export default {
  name: "RoomCreator",
  components: {
    CardModal,
  },
  data() {
    return {
      name: "",
      password: "",
      maxPlayers: 5,
      errors: {},
    };
  },
  methods: {
    createRoom() {
      let { errors, ...roomdata } = this.$data;
      let flag = true;

      if (roomdata.name.length < 1) {
        this.$set(this.$data.errors, "name", true);
        flag = false;
      } else {
        this.$set(this.$data.errors, "name", false);
      }

      if (!flag) {
        return false;
      }

      this.$socket.emit("create_room", roomdata);

      this.resetForm();

      return true;
    },
    close() {
      this.$emit("close");
    },
    resetForm() {
      this.$data.name = "";
      this.$data.password = "";
      this.$data.errors = {};
    },
  },
};
</script>

<style lang="scss">
.control.is-fullwidth {
  flex: 1;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: rotateY(50deg);
}

.fade-enter-active,
.fade-leave {
  opacity: 1;
  transform: rotateY(0deg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity, transform 200ms ease-out;
}
</style>

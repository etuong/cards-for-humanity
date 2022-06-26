<template>
  <card-modal
    title="Create a Game"
    :visible="true"
    transition="fade"
    class="section-xs"
    @cancel="close"
    @ok="createRoom"
    okText="OK"
  >
    <form class="columns is-multiline">
      <div class="field column is-6">
        <label class="label">Player's Name</label>
        <div class="control">
          <input
            v-model="name"
            class="input"
            type="text"
            placeholder="Enter your name.."
            required
          />
        </div>
        <p v-if="errors['name']" class="help is-danger">
          You have to enter a name
        </p>
      </div>

      <div class="field column is-6">
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="password"
            class="input"
            type="text"
            placeholder="Set a password.."
            required
          />
        </div>
        <p v-if="errors['password']" class="help is-danger">
          Minimum password length is 4
        </p>
      </div>
    </form>
  </card-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CardModal } from "vue-bulma-modal";

interface Error {
  name: Boolean;
  password: Boolean;
}

export default defineComponent({
  name: "GameCreator",
  components: {
    CardModal,
  },
  data() {
    return {
      name: "" as String,
      password: "" as String,
      errors: { name: false, password: false } as Error,
    };
  },
  methods: {
    createRoom() {
      let flag = true;

      if (this.name.length < 1) {
        this.errors["name"] = true;
        flag = false;
      } else {
        this.errors["name"] = false;
      }

      if (this.password.length < 4) {
        this.errors["password"] = true;
        flag = false;
      } else {
        this.errors["password"] = false;
      }

      if (!flag) {
        return false;
      }

      // this.$socket.emit("create_room", this.roomdata);

      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style lang="scss" scope>
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

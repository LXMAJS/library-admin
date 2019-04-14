<template>
  <div class="login">
    <button v-on:click="submit">点我</button>
  </div>
</template>

<script>
import { login } from "../services/login.js";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      let data = {
        username: "lxmajs",
        password: "0"
      };
      login(data)
        .then(res => {
          console.log(res);
        });
      console.log("submit");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin: 0;
  padding: 0;
  height: 100%;
  widows: 100%;
  background: url("../assets/background/bg1.png") no-repeat center 0px;
  background-position: center 0;
  background-size: cover;
}
</style>

<template>
  <div class="login">
    <div class="login-form"></div>
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
      login(data).then(res => {
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
  position: absolute;
  margin-top: 0px;
  background: url("../assets/background/bg1.png") no-repeat;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;

  display: flex;
  justify-content: center;
  flex-direction: row;
}

.login-form {
  width: 350px;
  height: 300px;
  background: #e1e1e1;
  opacity: 0.5;
  margin-top: 12%;
}
</style>

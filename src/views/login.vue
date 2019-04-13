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
        username: "123",
        password: "2jnl"
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

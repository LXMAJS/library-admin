<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pssword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from "../utils/api.js"

export default {
  name: 'login',
  data () {
    return {
      form: {
          username: '',
          password: ''
        }
    };
  },
  methods:{
    onSubmit (){
      api.post('http://127.0.0.1:8082/library' + "/user/login",
        {
          "username": "111",
          "password": "hhh"
        },
        function(res){
          console.log(res);
        }
      )
      console.log("submit");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

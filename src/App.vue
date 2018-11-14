<template>
  <div id="app">
    <img class="logo" src="./assets/imgs/logo_1.jpeg">
    <router-view/>
    <!-- <el-button @click="startHacking">Start</el-button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // startHacking () {
    //   this.$notify({
    //     title: 'It works!',
    //     type: 'success',
    //     message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
    //     duration: 5000
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 150px;
  height: 150px;
  border-radius: 75px;
}

</style>

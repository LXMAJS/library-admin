<template>
  <div id="app">
    <router-view/>
    <!-- <el-button @click="startHacking">Start</el-button> -->
    <Footer></Footer>
  </div>
</template>

<script>
import footer from "@/components/footer";
export default {
  name: "App",
  components: {
    Footer: footer
  },
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
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

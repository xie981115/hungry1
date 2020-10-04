<template>
  <div id="app">
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style scoped>
</style>

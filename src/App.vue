<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/static.css";
</style>
<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  components: { NavBar, Footer },
};
</script>

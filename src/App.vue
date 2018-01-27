<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view/>
    </div>
     
  </div>
</template>

<script>
import Navbar from './components/partial/Navbar.vue'
export default {
  name: 'App',
  components:{Navbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

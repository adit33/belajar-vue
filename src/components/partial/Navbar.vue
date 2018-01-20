<template>
  <div>
     <!-- <img src="./assets/logo.png"> -->
     <nav class="navbar is-info">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
     <router-link class="navbar-item" to='/'>Home</router-link>
     <router-link class="navbar-item" to='/Portofolio'>Portofolio</router-link>
     <router-link class="navbar-item" to='/About'>About</router-link>
    </div>

    <div class="navbar-end">

    </div>
  </div>
</nav>
  </div>
</template>

<script type="text/javascript">
  export default{
    name:'Navbar'
  }
</script>
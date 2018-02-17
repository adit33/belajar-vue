<template>
  <div>
     

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
          <router-link class="nav-link" to='/'>Home</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to='/Portofolio'>Portofolio</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to='/About'>About</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to='/User'>User</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

  </div>
</template>
<style type="text/css">
  nav{
    margin-bottom: 50px;
  }
</style>
<script type="text/javascript">
  export default{
    name:'Navbar'
  }
</script>
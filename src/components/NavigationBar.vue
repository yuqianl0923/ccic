<template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-lg navbar-dark" data-overlay data-sticky="top">
      <div class="container">
        <router-link class="navbar-brand fade-page" to="/">
          <img src="static/img/ccic-logo-white.png" alt="CCIC">
        </router-link>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <router-link class="nav-link active" to="/">HOME</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">ABOUT</router-link>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/faq">About CCINA</router-link>
              <router-link class="dropdown-item" to="/">About CCIC Group</router-link>
              <router-link class="dropdown-item" to="/">Something else here</router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/">Separated link</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">SERVICES</router-link>
              <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/">Agriculture</router-link>
              <router-link class="dropdown-item" to="/">Chinese HACCP</router-link>
              <router-link class="dropdown-item" to="/">Chinese Label</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">RESOURCE</router-link>
              <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/">News and Information</router-link>
              <router-link class="dropdown-item" to="/">Download Files</router-link>
              <router-link class="dropdown-item" to="/">Social Services</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">FSPCA TRAINING</router-link>
              <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/">News and Information</router-link>
              <router-link class="dropdown-item" to="/">Download Files</router-link>
              <router-link class="dropdown-item" to="/">Social Services</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        }
      }
  }
</script>

<style>
  .navbar{
    background-color:rgba(0,0,0,0)!important;
  }
</style>

<template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-lg navbar-dark" data-overlay data-sticky="top" style="background-color:rgba(0,0,0,0)!important;">
      <div class="container">
        <router-link class="navbar-brand fade-page" to="/">
          <img src="static/img/ccic-logo-white.png" alt="CCIC">
        </router-link>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="/about" role="button" aria-haspopup="true" aria-expanded="false">ABOUT</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">SERVICES</a>
              <div class="dropdown-menu">
              <router-link class="dropdown-item" :to="'/preship'">Pre Shipment Insepction</router-link>
              <router-link class="dropdown-item" to="/foodproduction">Food Safety</router-link>
               <router-link class="dropdown-item" to="/shippingused">Pre Shipping Used</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">RESOURCES</a>
              <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/download">Download</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="/news" role="button" aria-haspopup="true" aria-expanded="false">NEWS</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="/contact">CONTACT</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-toggle="dropdown" to="/career" role="button" aria-haspopup="true" aria-expanded="false">CAREER</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>

<script>
  export default {
    name:'NavigationBarWhite'
  }
</script>

<style>

</style>

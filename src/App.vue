<script setup>
import { RouterLink, RouterView } from "vue-router";

(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active-page');
    }
  });
});

(function() {
  var $menu = $("#menu"),
  $menulink = $(".header-menu-link");
  
  $menulink.click(function() {
    $menulink.toggleClass("open");
    $menu.toggleClass("open");
    return false;
  });
});
</script>

<template>
  <div class="body">
    <header>
      <!-- Start Mobile Header -->
      <section class="header-area-mobile">
        <div class="header-menu-bar">
          <a href="./" class="header-logo-name-mobile">
            <img src="../src/assets/logos/bouquet.svg" alt="Lily's Garden">
            <p>Lily's Garden</p>
          </a>
          <div class="cart-menu">
          <RouterLink to="/cart" class="cart"><img src="../src/assets/logos/cart.png" alt="Cart"></RouterLink>
          <button class="header-menu-link">
            <img src="../src/assets/logos/menu.png" alt="Menu">
          </button>
        </div>
        </div>
        <nav class="header-nav" id="menu">
          <ul>
            <li><RouterLink to="/">Shop</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
        </nav>
      </section>
      <!-- End Mobile Header -->
      <!-- Start Desktop Header -->
      <section class="header-area-desktop">
        <div class="header-menu-bar">
          <a href="./" class="header-logo-name-desktop">
            <img src="../src/assets/logos/bouquet.svg" alt="Lily's Garden">
            <p>Lily's Garden</p>
          </a>
        </div>
        <nav class="header-nav">
          <ul>
            <li><RouterLink to="/">Shop</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
        </nav>
        <div class="">
          <RouterLink to="/cart" class="cart"><img src="../src/assets/logos/cart.png" alt="Cart"></RouterLink>
        </div>
      </section>
      <!-- End Desktop Header -->
    </header>

    <RouterView />

    <footer>
      <div class="footer-area">
        <div class="footer-logo-name">
          <img src="../src/assets/logos/bouquet.svg" alt="Lily's Garden">
          <p>Lily's Garden</p>
        </div>
        <nav class="secondary-nav">
          <ul>
            <li><RouterLink to="/" class="">Shop</RouterLink></li>
            <li><RouterLink to="/about" class="">About</RouterLink></li>
            <li><RouterLink to="/contact" class="">Contact Us</RouterLink></li>
            <li><RouterLink to="/terms" class="">Terms and Services</RouterLink></li>
            <li><RouterLink to="/policy" class="">Privacy Policy</RouterLink></li>
          </ul>
        </nav>
      </div>
      <p class="copyright">Copyright &copy; 2022 Lily's Garden. All rights reserved.</p>
    </footer>
  </div>
</template>


<style> 
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');
</style>
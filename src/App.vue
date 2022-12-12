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
      <section class="header-area">
        <div class="header-menu-bar">
          <img src="../src/assets/logos/bouquet.svg" alt="Lily's Garden">  
          <a href="./" class="header-logo-name">
            <p>Lily's Garden</p>
          </a>
        </div>
        <nav class="header-nav" id="menu">
          <ul>
            <li><RouterLink to="/">Shop</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
        </nav>
        <div class="">
          <button class="header-menu-link">
            <div class="icon">
              Menu
            </div>
          </button>
          <RouterLink to="/cart" class="cart">Cart</RouterLink>
        </div>
      </section>
    </header>

    <RouterView />

    <footer>
      <div class="footer-area">
        <div class="bottom-socials">
          <div class="footer-logo-name">
            <img src="../src/assets/logos/bouquet.svg" alt="Lily's Garden">
            <p>Lily's Garden</p>
          </div>
          <div class="social-logos">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
          </div>
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
      <p>Copyright &copy; 2022 Lily's Garden. All rights reserved.</p>
    </footer>
  </div>
</template>


<style> 
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');
</style>
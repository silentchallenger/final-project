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
          <a href="./" class="header-logo-name">
            <p>Flower Shop</p>
          </a>
          <button class="header-menu-link">
            <div class="icon">
              Menu
            </div>
          </button>
        </div>
        <nav class="header-nav" id="menu">
          <ul>
            <li><RouterLink to="/" class="">Home</RouterLink></li>
            <li><RouterLink to="/about" class="">About</RouterLink></li>
            <li><RouterLink to="/contact" class="">Contact Us</RouterLink></li>
        </ul>
        </nav>
      </section>
    </header>

    <RouterView />

    <footer>
      <div class="footer-area">
        <div class="bottom-socials">
          <div class="bottom-logo-title">
            <p>Flower Shop</p>
          </div>
          <div class="social-logos">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
          </div>
        </div>
        <nav class="secondary-nav">
          <ul>
            <li><RouterLink to="/" class="">Home</RouterLink></li>
            <li><RouterLink to="/about" class="">About</RouterLink></li>
            <li><RouterLink to="/contact" class="">Contact Us</RouterLink></li>
          </ul>
        </nav>
      </div>
      <p>Copyright &copy; 2022 Flower Shop. All rights reserved.</p>
    </footer>
  </div>
</template>
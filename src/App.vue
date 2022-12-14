<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const showMenu = ref(false)
const menuToggle = () => (showMenu.value = !showMenu.value)

router.afterEach((to, from) => { 
  showMenu.value = false
});

const array = [
  {
    id: 1,
    name: "Tulip",
    description: "Nice for decoration",
    price: 5,
    imgLink: "../src/assets/images/1.png"
  },
  {
    id: 2,
    name: "Rose",
    description: "Colorful roses that will make you happy",
    price: 15,
    imgLink: "../src/assets/images/2.png"
  },
  {
    id: 3,
    name: "Cosmos",
    description: "Pink and white cosmoses for your table",
    price: 10,
    imgLink: "../src/assets/images/3.png"
  },
  {
    id: 4,
    name: "Rose",
    description: "Nice bouquet for your beloved one",
    price: 10,
    imgLink: "../src/assets/images/4.png"
  },
  {
    id: 5,
    name: "Mixed",
    description: "Different flower mixed for new feelings",
    price: 10,
    imgLink: "../src/assets/images/5.png"
  },
  {
    id: 6,
    name: "Mixed",
    description: "Classic flower arrangement from 90s",
    price: 10,
    imgLink: "../src/assets/images/6.png"
  },
  {
    id: 7,
    name: "Tulip",
    description: "White tulips that breathes new air",
    price: 10,
    imgLink: "../src/assets/images/7.png"
  },
  {
    id: 8,
    name: "Tulip",
    description: "Purple and white tulips for your bedroom",
    price: 10,
    imgLink: "../src/assets/images/8.png"
  },
  {
    id: 9,
    name: "Rose",
    description: "White rose that suits for special occasions",
    price: 10,
    imgLink: "../src/assets/images/9.png"
  },
  {
    id: 10,
    name: "Tulip",
    description: "Mixed tulips for your dinner table",
    price: 10,
    imgLink: "../src/assets/images/10.png"
  },
  {
    id: 11,
    name: "Dutch Iris",
    description: "Beautiful blue flowers",
    price: 10,
    imgLink: "../src/assets/images/11.png"
  },
  {
    id: 12,
    name: "Mixed",
    description: "Mixed arrangements for your house",
    price: 10,
    imgLink: "../src/assets/images/12.png"
  }
]

const cartItems = ref([])

function removeItem(id) {
  cartItems.value = cartItems.value.filter((i) => i.id !== id)
}

function addItem(item) {
  const foundItem = cartItems.value.find(i => i.id === item.id)
  if (foundItem) {
    if (foundItem.quantity < 6) {
      foundItem.quantity++
    }
  } else {
    cartItems.value.push({...item, quantity: 1})
  }
}

// function addItem(item) {
//   const foundItem = cartItems.value.find(i => i.id === item.id)
//   if (foundItem) {
//     foundItem.quantity++
//   } else {
//     cartItems.value.push({...item, quantity: 1})
//   }
// }
</script>

<template>
  <div class="body">
    <header>
      <!-- Start Mobile Header -->
      <section class="header-area-mobile">
        <div class="header-menu-bar">
          <RouterLink to="/" class="header-logo-name-mobile">
            <img src="../src/assets/logos/bouquet.svg" alt="Lily's Garden">
            <p>Lily's Garden</p>
          </RouterLink>
          <div class="cart-menu">
          <RouterLink to="/cart" class="cart"><img src="../src/assets/logos/cart.png" alt="Cart"></RouterLink>
          <button class="header-menu-link" @click.prevent="menuToggle">
            <img src="../src/assets/logos/menu.png" alt="Menu">
          </button>
        </div>
        </div>
        <nav class="header-nav" :class="showMenu ? 'open' : 'close'">
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
          <RouterLink to="/"  class="header-logo-name-desktop">
            <img src="../src/assets/logos/bouquet.svg" alt="Lily's Garden">
            <p>Lily's Garden</p>
          </RouterLink>
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

    <RouterView :cartItems="cartItems" :removeItem="removeItem" :addItem="addItem" :products="array"/>

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
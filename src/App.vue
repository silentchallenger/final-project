<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref } from "vue";
import { useToast } from "vue-toastification";

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
    imgLink: new URL("../src/assets/images/1.png", import.meta.url)
  },
  {
    id: 2,
    name: "Rose",
    description: "Colorful roses that will make you happy",
    price: 15,
    imgLink: new URL("../src/assets/images/2.png", import.meta.url)
  },
  {
    id: 3,
    name: "Cosmos",
    description: "Pink and white cosmoses for your table",
    price: 10,
    imgLink: new URL("../src/assets/images/3.png", import.meta.url)
  },
  {
    id: 4,
    name: "Rose",
    description: "Nice bouquet for your beloved one",
    price: 10,
    imgLink: new URL("../src/assets/images/4.png", import.meta.url)
  },
  {
    id: 5,
    name: "Mixed",
    description: "Different flower mixed for new feelings",
    price: 10,
    imgLink: new URL("../src/assets/images/5.png", import.meta.url)
  },
  {
    id: 6,
    name: "Mixed",
    description: "Classic flower arrangement from 90s",
    price: 10,
    imgLink: new URL("../src/assets/images/6.png", import.meta.url)
  },
  {
    id: 7,
    name: "Tulip",
    description: "White tulips that breathes new air",
    price: 10,
    imgLink: new URL("../src/assets/images/7.png", import.meta.url)
  },
  {
    id: 8,
    name: "Tulip",
    description: "Purple and white tulips for your bedroom",
    price: 10,
    imgLink: new URL("../src/assets/images/8.png", import.meta.url)
  },
  {
    id: 9,
    name: "Rose",
    description: "White rose that suits for special occasions",
    price: 10,
    imgLink: new URL("../src/assets/images/9.png", import.meta.url)
  },
  {
    id: 10,
    name: "Tulip",
    description: "Mixed tulips for your dinner table",
    price: 10,
    imgLink: new URL("../src/assets/images/10.png", import.meta.url)
  },
  {
    id: 11,
    name: "Dutch Iris",
    description: "Beautiful blue flowers",
    price: 10,
    imgLink: new URL("../src/assets/images/11.png", import.meta.url)
  },
  {
    id: 12,
    name: "Mixed",
    description: "Mixed arrangements for your house",
    price: 10,
    imgLink: new URL("../src/assets/images/12.png", import.meta.url)
  }
]

const cartItems = ref([])

function removeItem(id) {
  cartItems.value = cartItems.value.filter((i) => i.id !== id)
  toast.error('Item removed from cart')
}

function addItem(item) {
  const foundItem = cartItems.value.find(i => i.id === item.id)
  if (foundItem) {
    if (foundItem.quantity < 6) {
      foundItem.quantity++
      toast('Item added to cart')
    } else {
      toast.error('Maximum quantity reached')
    }
  } else {
    cartItems.value.push({...item, quantity: 1})
    toast('Item added to cart')
  }
}

const toast = useToast();

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
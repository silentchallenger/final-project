<script setup>
import AppCard from '../components/AppCard.vue';

const products = [
  {
    id: 1,
    name: "Tulip",
    description: "Nice for decoration",
    price: 5,
    imgLink: new URL("../assets/images/1.png", import.meta.url)
  },
  {
    id: 2,
    name: "Rose",
    description: "Colorful roses that will make you happy",
    price: 15,
    imgLink: new URL("../assets/images/2.png", import.meta.url)
  },
  {
    id: 3,
    name: "Cosmos",
    description: "Pink and white cosmoses for your table",
    price: 10,
    imgLink: new URL("../assets/images/3.png", import.meta.url)
  },
  {
    id: 4,
    name: "Rose",
    description: "Nice bouquet for your beloved one",
    price: 10,
    imgLink: new URL("../assets/images/4.png", import.meta.url)
  },
  {
    id: 5,
    name: "Mixed",
    description: "Different flower mixed for new feelings",
    price: 10,
    imgLink: new URL("../assets/images/5.png", import.meta.url)
  },
  {
    id: 6,
    name: "Mixed",
    description: "Classic flower arrangement from 90s",
    price: 10,
    imgLink: new URL("../assets/images/6.png", import.meta.url)
  },
  {
    id: 7,
    name: "Tulip",
    description: "White tulips that breathes new air",
    price: 10,
    imgLink: new URL("../assets/images/7.png", import.meta.url)
  },
  {
    id: 8,
    name: "Tulip",
    description: "Purple and white tulips for your bedroom",
    price: 10,
    imgLink: new URL("../assets/images/8.png", import.meta.url)
  },
  {
    id: 9,
    name: "Rose",
    description: "White rose that suits for special occasions",
    price: 10,
    imgLink: new URL("../assets/images/9.png", import.meta.url)
  },
  {
    id: 10,
    name: "Tulip",
    description: "Mixed tulips for your dinner table",
    price: 10,
    imgLink: new URL("../assets/images/10.png", import.meta.url)
  },
  {
    id: 11,
    name: "Dutch Iris",
    description: "Beautiful blue flowers",
    price: 10,
    imgLink: new URL("../assets/images/11.png", import.meta.url)
  },
  {
    id: 12,
    name: "Mixed",
    description: "Mixed arrangements for your house",
    price: 10,
    imgLink: new URL("../assets/images/12.png", import.meta.url)
  }
]
</script>

<template>
  <div>
    <section class="banner-title">
      <div class="banner-content">
        <h1>Nice gifts</h1>
        <p>Open your eyes to these beautiful flowers.</p>
        <div class="cta">
          <a href="#products" class="cta-text">Shop Now!</a>
        </div>
      </div>
    </section>
    <main>
      <section class="mainCont">
        <h2 id="products"><a id="products">Our Products</a></h2>
        <div class="productCont">
          <AppCard v-for="flower in products" :key="flower.id" :item="flower"/>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import AppCard from '../components/AppCard.vue';

const array = [
  {
    id: 1,
    name: "Tulip",
    description: "Yellow, White Flower",
    price: 5,
    imgLink: "../src/assets/images/1.png"
  },
  {
    id: 2,
    name: "Rose",
    description: "Red Flower",
    price: 15,
    imgLink: "../src/assets/images/2.png"
  },
  {
    id: 3,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/3.png"
  },
  {
    id: 4,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/4.png"
  },
  {
    id: 5,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/5.png"
  },
  {
    id: 6,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/6.png"
  },
  {
    id: 7,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/7.png"
  },
  {
    id: 8,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/8.png"
  },
  {
    id: 9,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/9.png"
  }
]
</script>

<template>
  <section class="banner-title">
    <div class="banner-content">
      <h1>Nice gifts</h1>
      <p>Open your eyes to these beautiful flowers.</p>
      <div class="cta">
        <a href="/" target="_blank" class="cta-text">Shop Now!</a>
      </div>
    </div>
  </section>
  <main>
    <section class="mainCont">
      <h2>Our Products</h2>
      <div class="productCont">
        <AppCard v-for="flower in array" :key="flower.id" :flwrInf="flower" />
      </div>
    </section>
  </main>
</template>
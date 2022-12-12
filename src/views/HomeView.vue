<script setup>
import AppCard from '../components/AppCard.vue';

const array = [
  {
    id: 1,
    name: "Tulip",
    description: "Yellow, White Flower",
    price: 5,
    imgLink: "../src/assets/images/1.jpg"
  },
  {
    id: 2,
    name: "Rose",
    description: "Red Flower",
    price: 15,
    imgLink: "../src/assets/images/2.jpg"
  },
  {
    id: 3,
    name: "Carnation",
    description: "Red Flower",
    price: 10,
    imgLink: "../src/assets/images/3.jpg"
  },
]
</script>

<template>
  <section class="banner-title">
    <div class="banner-content">
      <h1>Nice gifts</h1>
      <p>Open your eyes to these beautiful flowers.</p>
      <div class="card">
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

<style>
.mainCont {
  display: flex;
  flex-direction: column;
}

.productCont {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media only screen and (min-width: 45rem) {
  .productCont {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
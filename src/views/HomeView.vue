<script setup>
import AppCard from '../components/AppCard.vue';

defineProps({
  addItem: Function,
  products: Object
})
</script>

<template>
  <div>
    <section class="banner-title">
      <div class="banner-content">
        <h1>Nice gifts</h1>
        <p>Open your eyes to these beautiful flowers.</p>
        <div class="cta">
          <RouterLink to="/" class="cta-text">Shop Now!</RouterLink>
        </div>
      </div>
    </section>
    <main>
      <section class="mainCont">
        <h2>Our Products</h2>
        <div class="productCont">
          <AppCard v-for="flower in products" :key="flower.id" :item="flower" :addItem="addItem"/>
        </div>
      </section>
    </main>
  </div>
</template>
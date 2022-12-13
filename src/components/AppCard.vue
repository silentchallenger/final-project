<script setup>
defineProps({
  flwrInf: Object
})
</script>

<template>
  <section class="product">
    <img :src="flwrInf.imgLink" :alt="flwrInf.name">
    <h3>{{ flwrInf.name }}</h3>
    <p class="description">{{ flwrInf.description }}</p>
    <div class="priceaddcart">
      <p class="price">${{ flwrInf.price }}</p>
      <button class="addtocart">Add to Cart</button>
    </div>
  </section>
</template>
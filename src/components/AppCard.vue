<script setup>
import { useCartStore } from '../stores/cart'

defineProps({
  item: Object
})

const cartStore = useCartStore();
</script>

<template>
  <section class="product">
    <img :src="item.imgLink" :alt="item.name">
    <h3>{{ item.name }}</h3>
    <p class="description">{{ item.description }}</p>
    <div class="priceaddcart">
      <p class="price">${{ item.price }}</p>
      <button class="addtocart btn" @click="cartStore.addItem(item)">Add to Cart</button>
    </div>
  </section>
</template>
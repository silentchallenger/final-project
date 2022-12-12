<script setup>
defineProps({
  flwrInf: Object
})
</script>

<template>
  <section class="product">
    <img :src="flwrInf.imgLink" :alt="flwrInf.name">
    <h3>{{ flwrInf.name }}</h3>
    <p>{{ flwrInf.description }}</p>
    <p>${{ flwrInf.price }}</p>
  </section>
</template>

<style scoped>
.product {
  border: 2px solid black;
  color:red
}

.product img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

h3, p {
  padding: 0 1rem;
}
</style>
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
    <p class="price">${{ flwrInf.price }}</p>
  </section>
</template>

<style scoped>
.product {
  margin-top: 2.5rem;
  padding: 0 1.5rem;
}
.product h3 {
  padding-top: 0.5rem;
}

.description {
  padding-bottom: 0.5rem;
}

.price {
  font-weight: bold;
}


.product img {
  width: 80%;
  max-width: 100%;
  /* object-fit: cover; */
  border: 1px solid black;
}

h3, p {
  margin: 0;
}
</style>
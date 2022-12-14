<script setup>
import CartItem from '../components/CartItem.vue';

const props = defineProps({
  cartItems: Object,
  removeItem: Function
})
</script>

<template>
  <main>
    <div class="cart-page">
      <h2>Cart</h2>
      <div>
        <table v-if="cartItems.length > 0">
          <thead>
            <tr>
              <th style="width: 15%">Thumbnail</th>
              <th style="width: 25%">Product</th>
              <th style="width: 15%">Price</th>
              <th style="width: 15%">Quantity</th>
              <th style="width: 15%">Total</th>
              <th style="width: 15%">Remove</th>
            </tr>
          </thead>
          <tbody>
            <CartItem v-for="row in cartItems" :key="row.id" :item="row" :removeItem="removeItem"/>
          </tbody>
        </table>
        <p v-else>Empty Cart</p>
      </div>
    </div>
  </main>
</template>

<style>
.cart-page {
  display: flex;
  flex-direction: column;
}
</style>
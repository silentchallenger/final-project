<script setup>
import CartItem from '../components/CartItem.vue';
import { RouterLink } from "vue-router";
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const totalPrice = computed(() => {
  let cartSum = 0;
  for (let i = 0; i < cartStore.items.length; i++) {
    cartSum = cartSum + cartStore.items[i].price * cartStore.items[i].quantity
  }
  return cartSum;
})

const cartStore = useCartStore();
</script>

<template>
  <main>
    <div class="cart-page">
      <h2>Cart</h2>
      <div v-if="cartStore.items.length > 0">
        <table>
          <thead>
            <tr>
              <th style="width: 15%">Picture</th>
              <th style="width: 20%">Product</th>
              <th style="width: 15%">Price</th>
              <th style="width: 25%">Quantity</th>
              <th style="width: 15%">Total</th>
              <th style="width: 10%">Remove</th>
            </tr>
          </thead>
          <tbody>
            <CartItem v-for="row in cartStore.items" :key="row.id" :item="row"/>
          </tbody>
        </table>
        <div class="cart-order">
          <table class="order-table">
            <thead>
              <tr>
                <th colspan="3">Cart Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2" style="font-weight: bold;">Sub Total</td>
                <td>${{ totalPrice }}</td>
              </tr>
              <tr>
                <td colspan="2">Free Shipping</td>
                <td>$0</td>
              </tr>
              <tr>
                <td colspan="2">Total</td>
                <td>${{ totalPrice}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <RouterLink to="/checkout" class="checkout-btn btn">Proceed To Checkout</RouterLink>
      </div>
      <p v-else>Your cart is empty</p>
    </div>
  </main>
</template>
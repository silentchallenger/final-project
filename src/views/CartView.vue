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
      <div v-if="cartStore.items.length> 0">
        <table>
          <thead>
            <tr>
              <th style="width: 15%">Picture</th>
              <th style="width: 25%">Product</th>
              <th style="width: 15%">Price</th>
              <th style="width: 15%">Quantity</th>
              <th style="width: 15%">Total</th>
              <th style="width: 15%">Remove</th>
            </tr>
          </thead>
          <tbody>
            <CartItem v-for="row in cartStore.items" :key="row.id" :item="row"/>
          </tbody>
        </table>
        <div>
          <p>{{ totalPrice }}</p>
          <RouterLink to="/checkout" class="checkout-btn btn">Proceed To Checkout</RouterLink>
        </div>
      </div>
      <p v-else>Your cart is empty</p>
    </div>
  </main>
</template>

<style>
.cart-page {
  display: flex;
  flex-direction: column;
}

.cart-page h2 {
  text-align: center;
}

.cart-page thead {
  background-color: #CC2121;
  color: white;
}

.cart-page table, th, td {
  border: 1px solid #ebebeb;
  text-align: center;
}

.cart-page button {
  background-color: white;
  border: none;
  cursor: pointer;
}

.checkout-btn {
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 0;
  text-transform: capitalize;
  background-color: #CC2121;
}
</style>
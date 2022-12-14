<script setup>
import CartItem from '../components/CartItem.vue';
import { RouterLink, RouterView } from "vue-router";
import { computed } from 'vue';

const props = defineProps({
  cartItems: Object,
  removeItem: Function
})

const totalPrice = computed(() => {
  let cartSum = 0;
  for (let i = 0; i < props.cartItems.length; i++) {
    cartSum = cartSum + props.cartItems[i].price * props.cartItems[i].quantity
  }
  return cartSum;
})
</script>

<template>
  <main>
    <div class="cart-page">
      <h2>Cart</h2>
      <div  v-if="cartItems.length > 0">
        <table >
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
        <div>
        <p>{{ totalPrice }}</p>
          <RouterLink to="/checkout" class="checkout-btn">Proceed To Checkout</RouterLink>
        </div>
      </div>
      <p v-else>Empty Cart</p>
    </div>
  </main>
</template>

<style>
.cart-page {
  display: flex;
  flex-direction: column;
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
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 0;
  text-transform: capitalize;
  background-color: #CC2121;
}
</style>
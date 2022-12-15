<script setup>
import { useCartStore } from '../stores/cart'

defineProps({
  item: Object,
})

const cartStore = useCartStore();
</script>

<template>
  <tr>
    <td>
      <img style="width: 100%;" :src="item.imgLink" :alt="item.name">
    </td>
    <td>{{ item.name }}</td>
    <td>${{ item.price }}</td>
    <td>
      <button @click="item.quantity--" :disabled="item.quantity == 1" style="width: 25px">-</button>
      <input style="width: 20%; text-align: center;" type="text" v-model="item.quantity" readonly>
      <button @click="item.quantity++" :disabled="item.quantity == 6" style="width: 25px">+</button>
    </td>
    <td>${{ item.price * item.quantity }}</td>
    <td>
      <button @click="cartStore.removeItem(item.id)">
        <img src="../assets/logos/remove.png" alt="Remove">
      </button>
    </td>
  </tr>
</template>
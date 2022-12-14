<script setup>
defineProps({
  item: Object,
  removeItem: Function
})
</script>

<template>
  <tr>
    <td>
      <img style="width: 100%;" :src="item.imgLink" :alt="item.name">
    </td>
    <td>{{ item.name }}</td>
    <td>${{ item.price }}</td>
    <td>
      <button @click="item.quantity--" :disabled="item.quantity == 1">-</button>
      <input style="width: 30%;" type="text" v-model="item.quantity" readonly>
      <button @click="item.quantity++" :disabled="item.quantity == 6">+</button>
    </td>
    <td>${{ item.price * item.quantity }}</td>
    <td>
      <button @click="removeItem(item.id)">
        <img src="../assets/logos/remove.png" alt="Remove">
      </button>
    </td>
  </tr>
</template>
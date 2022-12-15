import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

import { useToast } from "vue-toastification";


export const useCartStore = defineStore('cart', () => {
    const items = useLocalStorage('cart_items', []);
    
    const toast = useToast();

    function addItem(item) {
      const foundItem = items.value.find(i => i.id === item.id)
      if (foundItem) {
        if (foundItem.quantity < 6) {
          foundItem.quantity++
          toast('Item added to cart')
        } else {
          toast.error('Maximum quantity reached')
        }
      } else {
        items.value.push({...item, quantity: 1})
        toast('Item added to cart')
      }
    }

    function removeItem(id) {
      items.value = items.value.filter((i) => i.id !== id)
      toast.error('Item removed from cart')
    }

    return { items, addItem, removeItem };
});
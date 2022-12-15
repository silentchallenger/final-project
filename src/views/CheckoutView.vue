<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';
import firebaseApp from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useToast } from "vue-toastification";
import router from '../router'


const toast = useToast();

const isSubmitting = ref(false);
const cartStore = useCartStore();

const db = getFirestore(firebaseApp)

const orderFields = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  country: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  postalCode: ""
}

const orderRequest = ref({
  ...orderFields
})

async function orderSend () {
  isSubmitting.value = true
  
  try {
    await addDoc(collection(db, 'order_requests'), {...orderRequest.value, dateTime: (new Date()).toISOString(), items: [...cartStore.items]});
    toast.success('Your order is submitted')
    orderRequest.value = {...orderFields}
    cartStore.items = []
    router.push("/")
  } catch(e) {
    toast.error('Error while submitting: ' + e )
  }
  isSubmitting.value = false
}
</script>

<template>
  <main>
    <div>
      <form @submit.prevent="orderSend">
        <div>
          <label for="first_name" required>First Name</label>
          <input type="text" v-model="orderRequest.firstName" id="first_name" placeholder="First Name" required="">
        </div>
        <div>
          <label for="last_name" required>Last Name</label>
          <input type="text" v-model="orderRequest.lastName" id="last_name" placeholder="Last Name" required>
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="text" v-model="orderRequest.phone" id="phone" placeholder="Phone">
        </div>
        <div>
          <label for="email" class="required">Email Address</label>
          <input type="email" v-model="orderRequest.email" id="email" placeholder="Email Address" required>
        </div>
        <div>
          <label for="country" class="required">Country</label>
          <select name="country nice-select" v-model="orderRequest.country" id="country">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Armenia">Armenia</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="England">England</option>
            <option value="London">London</option>
            <option value="London">London</option>
            <option value="China">China</option>
          </select>
        </div>
        <div>
          <label for="address" class="required mt-20">Street address</label>
          <input type="text" v-model="orderRequest.address" id="address" placeholder="Street address Line 1" required="">
        </div>
        <div>
          <input type="text" v-model="orderRequest.address2" placeholder="Street address Line 2 (Optional)">
        </div>
        <div>
          <label for="city" class="required">City</label>
          <input type="text" v-model="orderRequest.city" id="city" placeholder="City" required="">
        </div>
        <div>
          <label for="state">State / Division</label>
          <input type="text" v-model="orderRequest.state" id="state" placeholder="State / Division">
        </div>
        <div>
          <label for="postcode" class="required">Postcode / ZIP</label>
          <input type="text" v-model="orderRequest.postalCode" id="postcode" placeholder="Postcode / ZIP" required="">
        </div>
        <button>Submit Order</button>
      </form>
    </div>
  </main>
</template>

<style>
form div {
  width: 100%;
}

form label {
  display: block;
}
</style>
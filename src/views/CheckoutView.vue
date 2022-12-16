<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '../stores/cart';
import firebaseApp from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useToast } from "vue-toastification";
import router from '../router'

const totalPrice = computed(() => {
  let cartSum = 0;
  for (let i = 0; i < cartStore.items.length; i++) {
    cartSum = cartSum + cartStore.items[i].price * cartStore.items[i].quantity
  }
  return cartSum;
})

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
    <div class="checkout-cont">
      <div class="billing-cont">
        <h2>Billing Information</h2>
        <form id="billing-form" class="billing-form" @submit.prevent="orderSend">
          <div class="name-fields">
            <div class="name">
              <label for="first_name">First Name</label>
              <input type="text" v-model="orderRequest.firstName" id="first_name" placeholder="First Name *" required>
            </div>
            <div class="name">
              <label for="last_name" required>Last Name</label>
              <input type="text" v-model="orderRequest.lastName" id="last_name" placeholder="Last Name *" required>
            </div>
          </div>
          <div>
            <label for="phone">Phone</label>
            <input type="text" v-model="orderRequest.phone" id="phone" placeholder="Phone *" required>
          </div>
          <div>
            <label for="email" class="required">Email Address</label>
            <input type="email" v-model="orderRequest.email" id="email" placeholder="Email Address *" required>
          </div>
          <div>
            <label for="address">Street Address</label>
            <input type="text" v-model="orderRequest.address" id="address" placeholder="Street address Line 1 *" required>
          </div>
          <div>
            <input type="text" v-model="orderRequest.address2" placeholder="Street Address Line 2 (Optional)">
          </div>
          <div>
            <label for="city">City</label>
            <input type="text" v-model="orderRequest.city" id="city" placeholder="City *" required>
          </div>
          <div>
            <label for="state">State / Division</label>
            <input type="text" v-model="orderRequest.state" id="state" placeholder="State / Division">
          </div>
          <div>
            <label for="country" class="required">Country</label>
            <input type="text" v-model="orderRequest.country" placeholder="Country *" id="country" required>
          </div>
          <div>
            <label for="postcode">Postcode / ZIP</label>
            <input type="text" v-model="orderRequest.postalCode" id="postcode" placeholder="Postcode / ZIP *" required>
          </div>
        </form>
      </div>
      <div class="order-cont">
        <h2>Order Summary</h2>
        <table>
          <thead>
            <tr>
              <th style="width: 30%">Product</th>
              <th style="width: 20%">Price</th>
              <th style="width: 20%">Quantity</th>
              <th style="width: 30%">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cartStore.items" :key="product.id">
              <td>{{ product.name }}</td>
              <td>${{ product.price }}</td>
              <td>{{ product.quantity }}</td>
              <td>${{ product.price * product.quantity }}</td>
            </tr>
            <tr>
              <td colspan="3" style="font-weight: bold;">Sub Total</td>
              <td>${{ totalPrice }}</td>
            </tr>
            <tr>
              <td colspan="3">Free Shipping</td>
              <td>$0</td>
            </tr>
            <tr>
              <td colspan="3">Total</td>
              <td>${{ totalPrice}}</td>
            </tr>
          </tbody>
        </table>
        <button type="submit" class="submit-btn btn" form="billing-form" :disabled="isSubmitting">{{ isSubmitting ? "Submitting" : "Place Order" }}</button>
      </div>
    </div>
  </main>
</template>

<style>
.checkout-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.billing-cont, .order-cont {
  padding: 1rem;
  width: 100%;
}

.checkout-cont h2 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.billing-form div {
  width: 100%;
}

.billing-form .name {
  width: 48%;
}

.billing-form input {
  padding: 0.5rem;
  width: 100%;

  background-color: #f7f7f7;
  border: 1px solid #ccc;
  color: #555;
}

.billing-form input:active, .billing-form input:focus {
  outline: none;
  border-color: #CC2121;
  background-color: #fff;
}

.billing-form label {
  display: block;
  margin-top: 1rem;
}

.order-cont table {
  background-color: #f7f7f7;
  width: 100%;

  margin-top: 2rem;
}

.order-cont table, th, td {
  border: 1px solid #ebebeb;
  text-align: center;
}

.order-cont table tr {
  width: 100%;
  height: 50px;
}

.name-fields {
  display: flex;
  justify-content: space-between;
}



.submit-btn {
  color: #fff;
  border-radius: 0;
  text-transform: capitalize;
  background-color: #CC2121;
  outline: none;

  padding: 10px 20px;
  margin-top: 1rem;
}

@media only screen and (min-width: 992px) {
  .checkout-cont {
  flex-direction: row;
}
}

</style>
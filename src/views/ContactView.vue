<script setup>
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import firebaseApp from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp)

const contactFields = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  subject: "",
  message: ""
}

const contactRequest = ref({
  ...contactFields
})

const toast = useToast();

const isSubmitting = ref(false);

async function contactSend () {
  isSubmitting.value = true
  try {
    await addDoc(collection(db, 'contact_requests'), {...contactRequest.value, dateTime: (new Date()).toISOString()});
    toast.success('Your request is submitted')
    contactRequest.value = {...contactFields}
  } catch(e) {
    toast.error('Error while submitting: ' + e )
  }
  isSubmitting.value = false
}
</script>

<template>
  <main>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <div class="contact-container">
        <div class="contact-form">
          <p>Send your request to us</p>
          <form @submit.prevent="contactSend">
            <input name="first_name" placeholder="First Name *" type="text" v-model="contactRequest.firstName" required>
            <input name="last_name" placeholder="Last Name *" type="text" v-model="contactRequest.lastName" required>
            <input name="phone" placeholder="Phone *" type="text" v-model="contactRequest.phone" required>
            <input name="email" placeholder="Email *" type="email" v-model="contactRequest.email" required>
            <input name="subject" placeholder="Subject *" type="text" v-model="contactRequest.subject" required>
            <textarea placeholder="Message *" name="message" rows="8" v-model="contactRequest.message" required></textarea>
            <button class="btn" :disabled="isSubmitting">{{ isSubmitting ? "Submitting" : "Send" }}</button>
          </form>
        </div>
        <div class="contact-info">
          <h2>Get into touch with us</h2>
          <p>We are always open to recommendations or any feedback from you to make our shop better for our customers.</p>
          <div class="info">
            <p>Address: 2618 40th Street Calgary T2E 6X1</p>
            <p>Phone: 403-888-5451</p>
            <p>Email: info@lilysgarden.shop</p>
            <p>Working Hours: 08:00 - 18:00 Weekdays only</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
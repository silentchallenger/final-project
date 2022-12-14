<script setup>
</script>

<template>
  <main>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <div class="contact-container">
        <div class="contact-form">
          <form action="">
            <!-- Send request vb. yazi yaz -->
            <input name="first_name" placeholder="Name *" type="text" required>
            <input name="phone" placeholder="Phone *" type="text" required>
            <input name="email_address" placeholder="Email *" type="text" required>
            <input name="contact_subject" placeholder="Subject *" type="text" required>
            <textarea placeholder="Message *" name="message" class="form-control2" required></textarea>
            <button @submit.prevent="">Send</button>
          </form>
        </div>
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>Address: 2618 40th Street Calgary T2E 6X1</p>
          <p>Phone: 403-888-5451</p>
          <p>Email: info@lilysgarden.com</p>
        </div>
      </div>
    </div>
  </main>
</template>
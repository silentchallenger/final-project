<script setup>
</script>

<template>
  <main>
    <div>
      <form action="">
        <div>
          <label for="f_name" required>First Name</label>
          <input type="text" id="f_name" placeholder="First Name" required="">
        </div>
        <div>
          <label for="l_name" required>Last Name</label>
          <input type="text" id="l_name" placeholder="Last Name" required>
        </div>
        <div>
          <label for="email" class="required">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" required>
        </div>
        <div>
            <label for="com-name">Company Name</label>
            <input type="text" id="com-name" placeholder="Company Name">
          </div>
          <div>
            <label for="country" class="required">Country</label>
            <select name="country nice-select" id="country">
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
            <label for="street-address" class="required mt-20">Street address</label>
            <input type="text" id="street-address" placeholder="Street address Line 1" required="">
          </div>
          <div>
            <input type="text" placeholder="Street address Line 2 (Optional)">
          </div>
          <div>
            <label for="town" class="required">Town / City</label>
            <input type="text" id="town" placeholder="Town / City" required="">
          </div>
          <div>
            <label for="state">State / Division</label>
            <input type="text" id="state" placeholder="State / Division">
          </div>
          <div>
            <label for="postcode" class="required">Postcode / ZIP</label>
            <input type="text" id="postcode" placeholder="Postcode / ZIP" required="">
          </div>
          <div>
            <label for="phone">Phone</label>
            <input type="text" id="phone" placeholder="Phone">
          </div>
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
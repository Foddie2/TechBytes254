<template>
    <form @submit.prevent="submitForm">
      <input type="text" name="name" v-model="form.name" />
      <input type="email" name="email" v-model="form.email" />
      <textarea name="message" v-model="form.message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </template>
  
  <script setup>
  const form = ref({
    access_key: "07298aa2-112b-4476-9933-227a0f8f980a",
    subject: "New Submission from Web3Forms",
    name: "",
    email: "",
    message: "",
  });
  
  const result = ref("");
  const status = ref("");
  
  const submitForm = async () => {
    try {
      status.value = "loading";
      const response = await $fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form.value,
      });
      console.log(response);
      result.value = response.message;
      if (response.status === 200) {
        status.value = "success";
      } else {
        console.log(response); // Log for debugging, can be removed
        status.value = "error";
      }
    } catch (error) {
      console.log(error); // Log for debugging, can be removed
      status.value = "error";
      result.value = "Something went wrong!";
    } finally {
      // Reset form after submission
      form.value.name = "";
      form.value.email = "";
      form.value.message = "";
  
      // Clear result and status after 5 seconds
      setTimeout(() => {
        result.value = "";
        status.value = "";
      }, 5000);
    }
  };
  </script>
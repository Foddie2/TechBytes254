<template>
  <section class="mb-32 text-stone-800">
      <div
        class=" mx-auto px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10" data-aos="fade-up" data-aos-delay="300">
        <div class="grid lg:grid-cols-2 items-center">
          <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
              style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)">
              <h2 class="text-3xl font-bold mb-4">Contact us</h2>
              <div class="space-y-4 py-4">
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6 text-base">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span>Donholm Area, Nairobi</span>
                </p>
              <!--   <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6 text-base">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span>Rahimtula Trust Building, Nairobi</span>
                </p> -->
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6 text-base">
                    <path fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span>P.O BOX 30126 - 00100,</span>
                </p>
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 mr-2 sm:mr-6 text-base">
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                    </path>
                  </svg>
                  <span> +254711974716</span>
                </p>
              </div>
              <form @submit.prevent="submitForm">
                <div class="form-group mb-4">
                  <input id="text" type="text" name="name" v-model="form.name" required
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-stone-700 bg-white bg-clip-padding border border-solid border-stone-300 rounded transition ease-in-out m-0 focus:text-stone-700 focus:bg-white focus:border-blue-400 focus:outline-none"
                   placeholder="Name" />
                </div>
                <div class="form-group mb-4">
                  <input id="email" type="email" name="email" v-model="form.email" required
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-stone-700 bg-white bg-clip-padding border border-solid border-stone-300 rounded transition ease-in-out m-0 focus:text-stone-700 focus:bg-white focus:border-blue-400 focus:outline-none"
                     placeholder="Email address" />
                </div>
                <div class="form-group mb-4">
                  <textarea  id="message" name="message" v-model="form.message" required
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-stone-700 bg-white bg-clip-padding border border-solid border-stone-300 rounded transition ease-in-out m-0 focus:text-stone-700 focus:bg-white focus:border-blue-400 focus:outline-none"
                   rows="3" placeholder="Message">
                  </textarea>
                </div>

                <button type="submit"
                      class="px-5 py-2.5 mt-7 relative rounded group font-medium text-white uppercase inline-block">
                      <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-teal-500"></span>
                      <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-400 to-teal-400"></span>
                      <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-600 to-teal-500"></span>
                      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-600 from-teal-500"></span>
                      <span class="relative">Contact</span>
                      </button>
          
              </form>
              
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0  relative max-sm:hidden">
            <div class="map-container relative shadow-lg rounded-lg sm-absolute">
              <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Donholm%20Nairobi+(Techbytes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>
.map-container {
height: 500px;
z-index: -1;
}

</style>


<script setup>
  const form = ref({
    access_key: "07298aa2-112b-4476-9933-227a0f8f980a",
    subject: "Email sent from Techbytes",
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
      
      result.value = response.message;
      if (response.status === 200) {
        status.value = "success";
      } else {
         // Log for debugging, can be removed
        status.value = "error";
      }
    } catch (error) {
       // Log for debugging, can be removed
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
    transporter.sendMail(fields, function (error) {
		/** Let's try to send the email */
		if (error) {
			/** Oh fuck, an error... Let's change the response so our front-end knows about this and add the details */
			response.value = {
				status:  500,
				message: error.message,
				success: false
			}
		} else {
			/** Everything went well 😎. We'll change the response so our front-end gets that information and can use it */
			response.value = {
				status:  200,
				message: 'E-Mail sent successfully',
				success: true
			}
		}
	})

	return response.value

  };

  
  </script>


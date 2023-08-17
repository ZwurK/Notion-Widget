<template>
  <div class="flex flex-col items-center justify-center mt-24">
    <h2 class="text-3xl mb-24">Contact us</h2>
    <form @submit.prevent="handleContact" class="w-1/3 flex flex-col gap-3">
      <div>
        <label class="block mb-2 text-sm font-bold text-gray-600" for="email"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full p-2 border border-gray-300 rounded"
          required
          placeholder="message"
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-bold text-gray-600" for="subject"
          >Subject</label
        >
        <input
          v-model="subject"
          type="text"
          id="subject"
          class="w-full p-2 border border-gray-300 rounded"
          required
          placeholder="message"
        />
      </div>
      <div>
        <label class="block mb-2 text-sm font-bold text-gray-600" for="message"
          >Message</label
        >
        <textarea
          v-model="message"
          type="text"
          id="message"
          class="w-full p-2 border border-gray-300 rounded"
          required
          placeholder="message"
          rows="5"
        >
        </textarea>
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-black text-white rounded"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const {create } = useStrapi();

const email = ref(null);
const subject = ref(null);
const message = ref(null)


const handleContact = async () => {
  try {
    const response = await create('contacts', {
        email: email.value,
        subject: subject.value,
        message: message.value
    });
    toast.success("Your message has been successfully sent.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
    navigateTo("/");
  } catch (error) {
    console.error(error);
    toast.error('An error has occurred, please try again.', {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
}
</script>

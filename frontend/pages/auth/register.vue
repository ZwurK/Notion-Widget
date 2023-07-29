<template>
  <div class="flex flex-col items-center justify-center mt-24">
    <h2 class="text-3xl mb-24">Sign up</h2>
    <form @submit.prevent="handleRegister" class="w-1/3">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-600" for="name"
          >Username:</label
        >
        <input
          v-model="username"
          id="name"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-600" for="email"
          >Email:</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-600" for="password"
          >Password:</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block mb-2 text-sm font-bold text-gray-600"
          for="confirmPassword"
          >Confirm Password:</label
        >
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          class="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-black text-white rounded mb-2"
      >
        Register
      </button>
      <NuxtLink to="/auth/login" class="text-sm text-gray-500"
        >Already have an account?
        <span class="underline">Log in</span></NuxtLink
      >
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const { register } = useStrapiAuth();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    return;
  }

  try {
    await register({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const toast = useToast();

    toast.success("You have successfully registered.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });

    navigateTo("/");
  } catch (error) {
    const toast = useToast();

    toast.error(error.error.message, {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};
</script>

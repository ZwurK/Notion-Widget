<template>
  <div class="flex flex-col items-center justify-center mt-24">
    <h2 class="text-3xl mb-24">Login</h2>
    <form @submit.prevent="handleLogin" class="w-1/3">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-600" for="email"
          >Email or username:</label
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
        <NuxtLink to="/auth/forgot-password" class="text-sm text-gray-500"
          >Forgot password?</NuxtLink
        >
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-black text-white rounded mb-2"
      >
        Login
      </button>
      <NuxtLink to="/auth/register" class="text-sm text-gray-500"
        >Don't have an account? <span class="underline">Sign up</span></NuxtLink
      >
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const { login } = useStrapiAuth();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    await login({ identifier: email.value, password: password.value });

    const toast = useToast();

    toast.success("You have successfully logged in.", {
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

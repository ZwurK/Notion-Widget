<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-2xl mb-6">Forgot Password</h2>
    <form @submit.prevent="handleForgotPassword" class="w-1/3">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold" for="email">Email:</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Send Reset Link
      </button>
    </form>
    <div
      v-if="errors"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span class="block sm:inline">{{ errors }}</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const email = ref("");

const { forgotPassword } = useStrapiAuth();

const handleForgotPassword = async () => {
  try {
    await forgotPassword({ email: email.value });

    const toast = useToast();

    toast.success("A password reset email has been sent.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  } catch (error) {
    const toast = useToast();

    toast.error(error.error.message, {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};
</script>

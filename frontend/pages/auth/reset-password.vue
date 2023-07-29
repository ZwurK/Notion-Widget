<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-2xl mb-6">Reset Password</h2>
    <form @submit.prevent="onSubmit" class="w-1/3">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold" for="code"
          >Reset Code:</label
        >
        <input
          v-model="code"
          type="text"
          id="code"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold" for="password"
          >New Password:</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold" for="passwordConfirmation"
          >Confirm New Password:</label
        >
        <input
          v-model="passwordConfirmation"
          type="password"
          id="passwordConfirmation"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Reset Password
      </button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const code = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const { resetPassword } = useStrapiAuth();

const onSubmit = async () => {
  try {
    await resetPassword({
      code: code.value,
      password: password.value,
      passwordConfirmation: passwordConfirmation.value,
    });

    const toast = useToast();

    toast.success("Password successfully changed.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
    navigateTo("/auth/login");
  } catch (error) {
    const toast = useToast();

    toast.error(error.error.message, {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};
</script>

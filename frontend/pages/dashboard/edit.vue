<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-semibold mb-4">Edit account</h1>
    <div class="mb-4">
      <span class="block mb-2 text-sm font-bold text-gray-600">Username :</span>
      <input
        class="py-1 pl-2 bg-gray-200 rounded border border-gray-300 text-gray-700"
        disabled
        :value="username"
      />
    </div>
    <div class="mb-4">
      <span class="block mb-2 text-sm font-bold text-gray-600">Email:</span>
      <input
        class="py-1 pl-2 bg-gray-200 rounded border border-gray-300 text-gray-700"
        disabled
        :value="email"
      />
    </div>

    <form @submit.prevent="handleChangePassword">
      <div class="mb-4">
        <label
          for="current-password"
          class="block mb-2 text-sm font-bold text-gray-600"
          >Current password:</label
        >
        <input
          v-model="currentPassword"
          id="current-password"
          type="password"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label
          for="new-password"
          class="block mb-2 text-sm font-bold text-gray-600"
          >New password:</label
        >
        <input
          v-model="password"
          id="new-password"
          type="password"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label
          for="confirm-password"
          class="block mb-2 text-sm font-bold text-gray-600"
          >Confirm password:</label
        >
        <input
          v-model="passwordConfirmation"
          id="confirm-password"
          type="password"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-black text-white rounded"
      >
        Update password
      </button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();

// Fetch user data

const user = useStrapiUser();
const username = user.value.username;
const email = user.value.email;

// Change password

const password = ref(null);
const passwordConfirmation = ref(null);
const currentPassword = ref(null);

const { changePassword } = useStrapiAuth();
const handleChangePassword = async () => {
  try {
    await changePassword({
      currentPassword: password.value,
      password: passwordConfirmation.value,
      passwordConfirmation: currentPassword.value,
    });

    toast.success("Password successfully changed", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  } catch (error) {

    toast.error(error.error.message, {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};

definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
});
</script>

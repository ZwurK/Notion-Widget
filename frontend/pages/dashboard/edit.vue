<template>
  <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md">
    <h1 class="text-xl font-semibold mb-4">Modifier les informations</h1>
    <div class="mb-4">
      <span class="block mb-2 text-sm font-bold text-gray-600">Nom d'utilisateur:</span>
      <span>{{ username }}</span>
    </div>
    <div class="mb-4">
      <span class="block mb-2 text-sm font-bold text-gray-600">Email:</span>
      <span>{{ email }}</span>
    </div>

    <form @submit.prevent="handleChangePassword">
      <div class="mb-4">
        <label for="current-password" class="block mb-2 text-sm font-bold text-gray-600">Mot de passe actuel:</label>
        <input v-model="currentPassword" id="current-password" type="password" class="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div class="mb-4">
        <label for="new-password" class="block mb-2 text-sm font-bold text-gray-600">Nouveau mot de passe:</label>
        <input v-model="password" id="new-password" type="password" class="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div class="mb-4">
        <label for="confirm-password" class="block mb-2 text-sm font-bold text-gray-600">Confirmez le nouveau mot de
          passe:</label>
        <input v-model="passwordConfirmation" id="confirm-password" type="password" class="w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Mettre à jour le mot
        de passe</button>
    </form>
  </div>
</template>

<script setup>

definePageMeta({
    layout: 'dashboard'
})

// Fetch user data

const user = useStrapiUser();
const username = user.value.username;
const email = user.value.email;

// Change password

const password = ref(null);
const passwordConfirmation = ref(null);
const currentPassword = ref(null);

const { changePassword } = useStrapiAuth()
const handleChangePassword = async () => {
  try {
    await changePassword({ currentPassword: password.value, password: passwordConfirmation.value, passwordConfirmation: currentPassword.value })
    $toast.success('Password changed!')
  } catch (error) { 
    errors.value = error.error.message
  }
}

</script>

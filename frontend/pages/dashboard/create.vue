<template>
  <div class="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6">Créer un nouveau widget</h2>
    <form @submit.prevent="handleCreateWidget">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title:</label>
        <input type="text" id="title" v-model="widget.title" required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500">
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description:</label>
        <textarea id="description" v-model="widget.description" required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <div class="mb-4">
        <label for="code" class="block text-sm font-medium text-gray-700 mb-2">Code:</label>
        <textarea id="code" v-model="widget.code" required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700 mb-2">Price:</label>
        <input type="text" id="price" v-model="widget.price" required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500">
      </div>
      <button type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">Créer</button>
    </form>
  </div>
</template>
  
<script setup>

const { create } = useStrapi();
const user = useStrapiUser();

const widget = ref({
  title: '',
  description: '',
  code: '',
  price: '',
  author: user.value.id
});

const handleCreateWidget = async () => {
  try {
    const response = await create('widgets', widget.value);
  } catch (error) {
    console.error('Erreur lors de la création du widget:', error);
    // Affichez une erreur à l'utilisateur ici
  }
};
</script>
  
<template>
  <div class="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6">Créer un nouveau widget</h2>
    <form @submit.prevent="handleCreateWidget">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 mb-2"
          >Title:</label
        >
        <input
          type="text"
          id="title"
          v-model="widget.title"
          required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label
          for="description"
          class="block text-sm font-medium text-gray-700 mb-2"
          >Description:</label
        >
        <textarea
          id="description"
          v-model="widget.description"
          required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="code" class="block text-sm font-medium text-gray-700 mb-2"
          >Code:</label
        >
        <textarea
          id="code"
          v-model="widget.code"
          required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700 mb-2"
          >Price:</label
        >
        <input
          type="text"
          id="price"
          v-model="widget.price"
          required
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="image" class="block text-sm font-medium text-gray-700 mb-2"
          >Image:</label
        >
        <input
          type="file"
          id="image"
          ref="imageInput"
          @change="handleFileChange"
          class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
      >
        Créer
      </button>
    </form>
  </div>
</template>

<script setup>
const user = useStrapiUser();
const client = useStrapiClient()

const widget = ref({
  title: "",
  description: "",
  code: "",
  price: "",
  author: user.value.id,
});
const imageInput = ref(null);

const handleFileChange = () => {
  console.log('File changed:', imageInput.value.files[0]);
};


const handleCreateWidget = async () => {
  try {
    // 1. Préparer le FormData
    const formData = new FormData();
    const imageFile = imageInput.value.files[0];
    formData.append("files.image", imageFile);
    formData.append("data", JSON.stringify(widget.value));

    // 2. Envoyer le formulaire à Strapi
    const { data } = await client(`/widgets`, {
      method: "POST",
      body: formData,
    });

    // Vous pouvez maintenant utiliser 'data' si nécessaire
  } catch (error) {
    console.error("Erreur lors de la création du widget:", error);
    // Affichez une erreur à l'utilisateur ici
  }
};
</script>

<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-6">Create a new widget</h2>
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
          class="w-full p-2 border border-gray-300 rounded"
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
          class="w-full p-2 border border-gray-300 rounded"
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
          class="w-full p-2 border border-gray-300 rounded"
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
          class="w-full p-2 border border-gray-300 rounded"
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
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        class="bg-black text-white py-2 px-4 rounded w-full"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const user = useStrapiUser();
const client = useStrapiClient();

const widget = ref({
  title: "",
  description: "",
  code: "",
  price: "",
  author: user.value.id,
});
const imageInput = ref(null);

const handleFileChange = () => {
  console.log("File changed:", imageInput.value.files[0]);
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

    const toast = useToast();

    toast.success("Widget successfully created.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });

    navigateTo("/dashboard/my-widgets");
  } catch (error) {
    const toast = useToast();

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

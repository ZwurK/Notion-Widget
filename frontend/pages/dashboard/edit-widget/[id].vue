<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-semibold mb-4">Edit widget</h1>

    <form @submit.prevent="handleChangePassword">
      <div class="mb-4">
        <label for="title" class="block mb-2 text-sm font-bold text-gray-600"
          >Title:</label
        >
        <input
          v-model="widgetData.title"
          id="title"
          type="text"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label
          for="description"
          class="block mb-2 text-sm font-bold text-gray-600"
          >Description:</label
        >
        <textarea
          v-model="widgetData.description"
          id="description"
          type="password"
          class="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="code" class="block mb-2 text-sm font-bold text-gray-600"
          >Code:</label
        >
        <textarea
          v-model="widgetData.code"
          id="code"
          type="text"
          class="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <!-- <div class="mb-4">
        <label for="price" class="block mb-2 text-sm font-bold text-gray-600"
          >Price:</label
        >
        <input
          v-model="widgetData.price"
          id="price"
          type="text"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div> -->
      <button
        @click="handleUpdateWidget"
        type="submit"
        class="w-full py-2 px-4 bg-black text-white rounded"
      >
        Update widget
      </button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();

const route = useRoute();

const widgetData = ref({
  title: "",
  description: "",
  code: "",
  price: "",
});

const handleUpdateWidget = async () => {
  try {
    const { update } = useStrapi();
    await update("community-widgets", route.params.id, {
      title: widgetData.value.title,
      description: widgetData.value.description,
      code: widgetData.value.code,
      price: widgetData.value.price,
    });

    toast.success("Widget successfully changed.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  } catch (error) {
    console.error(error);
    toast.error('An error has occurred, please try again.', {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};

onMounted(async () => {
  try {
    const { findOne } = useStrapi();
    const id = route.params.id;
    const widget = await findOne("community-widgets", route.params.id, {
      populate: "image",
    });
    widgetData.value.title = widget.data.attributes.title;
    widgetData.value.description = widget.data.attributes.description;
    widgetData.value.code = widget.data.attributes.code;
    widgetData.value.price = widget.data.attributes.price;
  } catch (error) {
    console.error(error);
    toast.error('An error has occurred, please try again.', {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
});

definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
});
</script>

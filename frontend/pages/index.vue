<template>
  <div>
    <div class="container mx-auto p-4">
      <div class="my-10">
        <h1 class="text-3xl text-center mb-2">Notion workshop official widgets.</h1>
        <h1 class="text-md text-gray-500 text-center">
          Search among premium beautiful widgets 100% customizable.
        </h1>
      </div>
      <form @submit.prevent="searchWidgets">
        <div class="flex border rounded overflow-hidden">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search widgets..."
            class="px-4 py-2 w-full outline-none"
          />
          <button type="submit" class="bg-black text-white px-4 py-2">
            Search
          </button>
        </div>
      </form>
      <div class="flex flex-wrap gap-4 mt-10" v-if="widgets">
        <WidgetCard
          v-for="widget in widgets.data"
          :key="widget.id"
          :id="widget.id"
          :title="widget.attributes.title"
          :image="widget.attributes.image.data.attributes.url"
          :description="widget.attributes.description"
          :downloads="widget.attributes.downloads"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import { useToast } from "vue-toastification";
const toast = useToast();
  
let searchQuery = ref("");
const widgets = ref(null);
const { find } = useStrapi();

const searchWidgets = async (append = false) => {
  try {
    const response = await find("official-widgets", {
      populate: "image",
      _q: searchQuery.value,
    });

    widgets.value = response; 
    console.log(response);
  } catch (error) {
    console.error(error);
    toast.error('An error has occurred, please try again.', {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};

onMounted(async () => {
  await searchWidgets();
});
</script>

<template>
  <div>
    <div class="container mx-auto p-4">
      <div class="my-10">
        <h1 class="text-3xl text-center mb-2">Notion, Reimagined by You.</h1>
        <h2 class="text-md text-gray-500 text-center">
          Thousands of widgets ready to use.
        </h2>
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
      <NuxtLink
        v-for="widget in widgets.data"
        :key="widget.id"
        :to="'/community/widget/' + widget.id"
        class="flex flex-wrap gap-4 mt-10"
        v-if="widgets"
      >
        <Card
          :id="widget.id"
          :title="widget.attributes.title"
          :image="
            getHighestResolutionImageUrl(
              widget.attributes.image.data.attributes
            )
          "
          :description="widget.attributes.description"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const { getHighestResolutionImageUrl } = useImage();

let searchQuery = ref("");
const widgets = ref(null);
const { find } = useStrapi();

const { data, pending, refresh, error } = await useAsyncData(
  "official-widget",
  () =>
    find("community-widgets", {
      populate: "image",
      _q: searchQuery.value,
    })
);

console.log(data.value);
widgets.value = data.value;

if (error.value) {
  console.log(error.value);
  toast.error("An error has occurred, please try again.", {
    timeout: 2000,
    toastClassName: "custom-toast",
  });
}
</script>

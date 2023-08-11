<template>
  <div>
    <div class="container mx-auto p-4">
      <div class="my-10">
        <h1 class="text-3xl text-center mb-2">Notion, Reimagined by You.</h1>
        <h1 class="text-md text-gray-500 text-center">
          Thousands of widgets ready to use.
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
      <NuxtLink
        v-for="widget in widgets.data"
        :key="widget.id"
        :to="'/community/widget/'+widget.id"
        class="flex flex-wrap gap-4 mt-10"
        v-if="widgets"
      >
        <WidgetCard
          :id="widget.id"
          :title="widget.attributes.title"
          :image="widget.attributes.image.data.attributes.url"
          :description="widget.attributes.description"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
let searchQuery = ref("");
const widgets = ref(null);
const { find } = useStrapi();

const searchWidgets = async (append = false) => {
  const response = await find("community-widgets", {
    populate: "image",
    _q: searchQuery.value,
  });

  widgets.value = response;
};

onMounted(async () => {
  await searchWidgets();
});
</script>

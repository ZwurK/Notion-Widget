<template>
  <div>
    <!-- Barre de recherche -->
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
      <button @click="loadMore" v-if="hasMore" class="mt-4">Load more</button>
    </div>
  </div>
</template>

<script setup>

let searchQuery = ref("");
const widgets = ref(null);
const { find } = useStrapi();

const itemsPerPage = 10;
let currentPage = ref(1);
let hasMore = ref(true);

const searchWidgets = async (append = false) => {
  const response = await find("widgets", {
    populate: "image",
    _q: searchQuery.value,
    pagination: {
      limit: itemsPerPage,
      start: (currentPage.value - 1) * itemsPerPage,
    },
  });

  if (append && widgets.value) {
    widgets.value.data.push(...response.data);
  } else {
    widgets.value = response;
  }

  if (response.data.length < itemsPerPage) {
    hasMore.value = false;
  } else {
    currentPage.value++;
  }
};

const loadMore = async () => {
  await searchWidgets(true);
};

onMounted(async () => {
  await searchWidgets();
});
</script>

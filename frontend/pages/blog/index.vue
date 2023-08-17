<template>
  <div>
    <div class="container mx-auto p-4">
      <div class="my-10">
        <h1 class="text-3xl text-center mb-2">Notion workshop blog.</h1>
        <h2 class="text-md text-gray-500 text-center">
          Learn more about this wonderful tool, notion.
        </h2>
      </div>
      <form @submit.prevent="searchArticles">
        <div class="flex border rounded overflow-hidden">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search articles..."
            class="px-4 py-2 w-full outline-none"
          />
          <button type="submit" class="bg-black text-white px-4 py-2">
            Search
          </button>
        </div>
      </form>
      <div class="flex flex-wrap gap-4 mt-10" v-if="articles">
        <Card
          v-for="article in articles.data"
          :link="'/blog/article/' + article.id"
          :key="article.id"
          :id="article.id"
          :title="article.attributes.title"
          :image="
            getHighestResolutionImageUrl(
              article.attributes.image.data.attributes
            )
          "
          :description="article.attributes.description"
          type="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();
const { getHighestResolutionImageUrl } = useImage();

let searchQuery = ref("");
const articles = ref(null);
const { find } = useStrapi();

const { data, pending, refresh, error } = await useAsyncData(
  "official-widget",
  () =>
    find("articles", {
      populate: "image",
      _q: searchQuery.value,
    })
);
articles.value = data.value;

const searchArticles = async () => {
  const { data, pending, refresh, error } = await useAsyncData(
    "official-widget",
    () =>
      find("articles", {
        populate: "image",
        _q: searchQuery.value,
      })
  );
  articles.value = data.value;

  if (error.value) {
    toast.error("An error has occurred, please try again.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};
</script>

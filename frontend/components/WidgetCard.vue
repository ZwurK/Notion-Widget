<template>
  <NuxtLink
    :to="`/widget/${id}`"
    class="border-2 border-black flex flex-col h-96 w-96 overflow-hidden"
  >
    <img
      :src="'http://localhost:1337' + image"
      alt="Card Image"
      class="w-full h-48 object-cover border-b-2 border-black"
    />

    <div class="flex-1 px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>

    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-flex items-center text-white rounded-full px-3 py-1 text-sm font-semibold bg-black"
      >
        {{ downloads || 0 }} <span class="mx-1">downloads</span>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  downloads: {
    type: Number,
    default: 0,
  },
});
</script>

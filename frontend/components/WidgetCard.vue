<template>
  <NuxtLink :to="`/widget/${id}`" class="rounded overflow-hidden shadow-lg">
    <!-- Image -->
    <img
      src="https://source.unsplash.com/random"
      alt="Card Image"
      class="w-full h-48 object-cover"
    />

    <div class="px-6 py-4">
      <!-- Titre -->
      <div class="font-bold text-xl mb-2">{{ title }}</div>

      <!-- Description -->
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>

    <div class="px-6 pt-4 pb-2">
      <!-- Nombre de téléchargements -->
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >
        {{ downloads }} téléchargements
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

<template>
<client-only>
  <ConfirmDialog :type="type" :isOpen="showModal" :widgetId="id" @update:isOpen="showModal = $event" />
</client-only>

  <div
    class="border-2 border-black flex flex-col h-96 w-96 overflow-hidden relative cursor-pointer" @click="navigateTo(link)"
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
    <div
      v-if="route.path === '/dashboard/my-widgets'"
      class="absolute bottom-2 right-2 space-x-2"
    >
    <button @click.stop='navigateTo(type == "community-widget" ? `/dashboard/edit-widget/${id}` : `/dashboard/custom-widget/${id}`)' class="bg-black text-white p-2 rounded">
        <IconsEdit />
      </button>
      <button
      @click.stop="toggleModal"
        class="bg-red-700 text-white p-2 rounded"
      >
        <IconsDelete />
      </button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};


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
  link: {
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
  type: {
    type: String,
    default: "community-widget",
  },
});

</script>

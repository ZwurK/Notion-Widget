<template>
    <div class="flex flex-wrap justify-center">
        <div v-for="widget in userWidgets" :key="widget.id">
            <WidgetCard :title="widget.title" :description="widget.description" :downloads="widget.downloads" />
            <button @click="handleDeleteWidget(widget.id)" class="bg-red-500">Delete</button>
        </div>
    </div>
</template>

<script setup>

// Display user's widgets

const user = useStrapiUser();

const userWidgets = computed(() => {
  return user.value ? user.value.widgets : [];
});

// Handle delete widget
const { delete: _delete } = useStrapi()

const handleDeleteWidget = async (id) => {
  try {
    const response = await _delete('widgets', id);
  } catch (error) {
    console.error('Error:', error);
  }
};

definePageMeta({
    layout: 'dashboard'
});

</script>

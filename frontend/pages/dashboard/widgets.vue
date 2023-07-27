<template>
    <div class="flex flex-wrap justify-center">
        <WidgetCard v-for="widget in userWidgets" :key="widget.id" :title="widget.title"
        :description="widget.description" :downloads="widget.downloads" />
    </div>
</template>

<script setup>
const user = useStrapiUser();
console.log(user)

const userWidgets = computed(() => {
  return user.value ? user.value.widgets : [];
});

definePageMeta({
    layout: 'dashboard'
});
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-wrap gap-4 mt-10">
      <WidgetCard v-for="widget in widgets"
        :key="widget.id"
        :id="widget.id"
        :title="widget.attributes.title"
        :image="widget.attributes.image.data.attributes.url"
        :description="widget.attributes.description"
        :downloads="widget.attributes.downloads"
      />
      <NuxtLink to="/dashboard/create" class="flex flex-col border-2 border-black border-dashed justify-center items-center h-96 w-96 overflow-hidden">
          <div class="w-48"><IconsPlus /></div>
        <p class="text-xl text-center">Create a new widget</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Display user's widgets

const widgets = ref(null);
const user = useStrapiUser();
const { find } = useStrapi();

const userWidgetsId = user.value
  ? user.value.widgets.map((widget) => widget.id)
  : [];
console.log(userWidgetsId);

if (userWidgetsId.length) {
  const response = await find("widgets", {
    populate: "image",
    filters: {
      id: { $in: userWidgetsId },
    },
  });

  widgets.value = response.data;
  console.log(response);
}

definePageMeta({
  layout: "dashboard",
  middleware: 'auth'
});
</script>

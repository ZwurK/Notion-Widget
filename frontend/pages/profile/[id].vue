<template>
  <div class="container mx-auto p-4">
    <div class="my-10">
      <h1 class="text-3xl text-center mb-2">{{ user.username }}</h1>
    </div>
    <div class="flex flex-wrap gap-4 mt-10">
      <WidgetCard
        v-for="widget in widgets"
        :key="widget.id"
        :id="widget.id"
        :title="widget.attributes.title"
        :image="widget.attributes.image.data.attributes.url"
        :description="widget.attributes.description"
        :downloads="widget.attributes.downloads"
      />
    </div>
  </div>
</template>

<script setup>
const widgets = ref(null);
const route = useRoute();
const { findOne, find } = useStrapi();

const user = await findOne("users", route.params.id, {
  populate: "widgets",
});

console.log(user);

const userWidgetsId = user ? user.widgets.map((widget) => widget.id) : [];
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
</script>

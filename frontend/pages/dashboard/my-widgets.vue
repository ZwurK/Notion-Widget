<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-wrap gap-4 mt-10">
      <WidgetCard
        v-for="widget in widgets"
        :key="widget.id"
        :link="'/community/widget/' + widget.id"
        :id="widget.id"
        :title="widget.attributes.title"
        :image="widget.attributes.image.data.attributes.url"
        :description="widget.attributes.description"
        :downloads="widget.attributes.downloads"
      />
      <WidgetCard
        v-for="customization in customizations"
        :key="customization.id"
        :link="'/official/widget/' + customization.id"
        :id="customization.id"
        :title="customization.attributes.title"
        :image="
          customization.attributes.widget.data.attributes.image.data.attributes
            .url
        "
        description="An official widget"
        :downloads="0"
      />
      <NuxtLink
        to="/dashboard/choose"
        class="flex flex-col border-2 border-black border-dashed justify-center items-center h-96 w-96 overflow-hidden"
      >
        <div class="w-48"><IconsPlus /></div>
        <p class="text-xl text-center">Create a new widget</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Display user's widgets

const widgets = ref(null);
const customizations = ref(null);
const user = useStrapiUser();
const { find } = useStrapi();

const userWidgetsId = user.value
  ? user.value.widgets.map((widget) => widget.id)
  : [];

if (userWidgetsId.length) {
  const communityWidgets = await find("community-widgets", {
    populate: "image",
    filters: {
      id: { $in: userWidgetsId },
    },
  });
  widgets.value = communityWidgets.data;
}

const userCustomizationsId = user.value
  ? user.value.customizations.map((customization) => customization.id)
  : [];

if (userCustomizationsId.length) {
  const WidgetCustomizations = await find("customizations", {
    populate: { widget: { populate: ["image"] } },
    filters: {
      id: { $in: userCustomizationsId },
    },
  });
  customizations.value = WidgetCustomizations.data;
  console.log(customizations.value);
}

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

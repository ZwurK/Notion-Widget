<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-wrap gap-4 mt-10 justify-center items-center">
      <Card
        v-for="widget in widgets"
        :key="widget.id"
        :link="'/community/widget/' + widget.id"
        :id="widget.id"
        :title="widget.attributes.title"
        :image="
          getHighestResolutionImageUrl(widget.attributes.image.data.attributes)
        "
        :description="widget.attributes.description"
        type="community"
      />
      <Card
        v-for="customization in customizations"
        :key="customization.id"
        :link="'/official/widget/' + customization.id"
        :id="customization.id"
        :title="customization.attributes.title"
        :image="
          getHighestResolutionImageUrl(
            customization.attributes.widget.data.attributes.image.data
              .attributes
          )
        "
        description="An official widget"
        type="official"
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
import { useToast } from "vue-toastification";
const toast = useToast();
const user = useStrapiUser();
const { find } = useStrapi();
const { getHighestResolutionImageUrl } = useImage();

const widgets = ref(null);
const customizations = ref(null);

const userWidgetsId = user.value
  ? user.value.widgets.map((widget) => widget.id)
  : [];

if (userWidgetsId.length) {
  try {
    const communityWidgets = await find("community-widgets", {
      populate: "image",
      filters: {
        id: { $in: userWidgetsId },
      },
    });
    widgets.value = communityWidgets.data;
  } catch (error) {
    console.error(error);
    toast.error("An error has occurred, please try again.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
}

const userCustomizationsId = user.value
  ? user.value.customizations.map((customization) => customization.id)
  : [];

if (userCustomizationsId.length) {
  try {
    const WidgetCustomizations = await find("customizations", {
      populate: { widget: { populate: ["image"] } },
      filters: {
        id: { $in: userCustomizationsId },
      },
    });
    customizations.value = WidgetCustomizations.data;
  } catch (error) {
    console.error(error);
    toast.error("An error has occurred, please try again.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
}

definePageMeta({
  layout: "dashboard",
  middleware: "auth"
});
</script>

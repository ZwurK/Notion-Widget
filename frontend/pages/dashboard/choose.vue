<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6 text-center">Create a widget</h1>

    <div class="flex flex-wrap justify-center gap-10">
      <div class="flex flex-col items-center p-6 rounded border-2 border-black">
        <h2 class="text-xl font-semibold mb-4">Custom an official widget</h2>
        <p>Choose a widget and custom it.</p>
        <button
          @click="showWidgets = true"
          to="/dashboard/custom-widget"
          class="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Start
        </button>
      </div>

      <div class="flex flex-col items-center p-6 rounded border-2 border-black">
        <h2 class="text-xl font-semibold mb-4">Create your own widget</h2>
        <p>Insert your own code to create a unique widget.</p>
        <nuxt-link
          to="/dashboard/create-widget"
          class="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Start
        </nuxt-link>
      </div>
    </div>
    <div v-if="widgets && showWidgets">
      <h1 class="text-center text-2xl my-10">Choose a widget to custom</h1>
      <div class="flex flex-wrap gap-4 mt-10">
        <div
          @click="handleCreateCustomization(widget.id)"
          v-for="widget in widgets.data"
        >
          <Card
            :key="widget.id"
            :id="widget.id"
            :title="widget.attributes.title"
            :image="widget.attributes.image.data.attributes.url"
            :description="widget.attributes.description"
            type="official"
            link=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();

const showWidgets = ref(false);
const user = useStrapiUser();
const widgets = ref(null);
const { find, create } = useStrapi();

const handleCreateCustomization = async (widgetId) => {
  try {
    const userCustomizationsId = user.value
      ? user.value.customizations.map((customization) => customization.id)
      : [];
    if (userCustomizationsId.length < 3 || user.value.role.id === 3) {
      const response = await create("customizations", {
        author: user.value.id,
        widget: widgetId,
      });
      if (response && response.data.id) {
        navigateTo(`/dashboard/custom-widget/${response.data.id}`);
      } else {
        console.error("Error : UUID lacking");
      }
    } else {
      toast.error(
        "You've reached your widget creation limit. Subscribe to create new widgets.",
        {
          timeout: 2000,
          toastClassName: "custom-toast",
        }
      );
    }
  } catch (error) {
    console.error(error);
    toast.error("An error has occurred, please try again.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};

const searchWidgets = async () => {
  try {
    const response = await find("official-widgets", {
      populate: "image",
      filters: { type: "official" },
    });
    widgets.value = response;
  } catch (error) {
    console.error(error);
    toast.error("An error has occurred, please try again.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};

onMounted(async () => {
  await searchWidgets();
});

definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div v-if="customization && currentComponent">
    <component
      :is="currentComponent"
      :customization="customization.data.attributes.settings"
    />
  </div>
</template>

<script setup>
const customization = ref(null);
const { findOne } = useStrapi();
const route = useRoute();
let currentComponent = ref(null);

const getCustomization = async () => {
  try {
    const response = await findOne("customizations", route.params.id, {
      populate: "widget",
    });
    customization.value = response;
    switch (customization.value.data.attributes.widget.data.attributes.title) {
      case "Clock":
        currentComponent.value = resolveComponent("WidgetsClock");
        break;
      case "Countdown":
        currentComponent.value = resolveComponent("WidgetsCountdown");
        break;
      case "Quote":
        currentComponent.value = resolveComponent("WidgetsQuote");
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

try {
  const { data, pending, refresh, error } = await useAsyncData(
    "customization",
    () =>
      findOne("customizations", route.params.id, {
        populate: "widget",
      })
  );

  if (data.value && data.value.data) {
    customization.value = data.value.data;

    let currentComponent;
    switch (customization.value.attributes.widget.data.attributes.title) {
      case "Clock":
        currentComponent = resolveComponent("WidgetsClock");
        break;
    }
  }
} catch (error) {
  console.error(error);
  toast.error("An error has occurred, please try again.", {
    timeout: 2000,
    toastClassName: "custom-toast",
  });
}

onMounted(async () => {
  await getCustomization();
});

definePageMeta({
  layout: false,
});
</script>

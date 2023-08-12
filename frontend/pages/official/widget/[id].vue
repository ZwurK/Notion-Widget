<template>
  <div v-if="customization">
    <component
      :is="currentComponent"
      v-if="currentComponent"
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
    console.log(customization.value);
    switch (customization.value.data.attributes.widget.data.attributes.title) {
      case "Clock":
        currentComponent.value = resolveComponent("WidgetsClock");
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getCustomization();
});

definePageMeta({
  layout: false,
});
</script>

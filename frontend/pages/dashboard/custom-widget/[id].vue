<template>
  <div class="flex w-full" v-if="!pending && customization">
    <CustomizationPanel :currentTitle="customization.attributes.title" class="flex-none w-1/3" />
    <component
      :is="currentComponent"
      v-if="currentComponent"
      class="flex-auto"
    />
  </div>
</template>

<script setup>

import { useToast } from "vue-toastification";
const toast = useToast();

const { findOne } = useStrapi();
const route = useRoute();
const customization = ref(null);

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
  toast.error('An error has occurred, please try again.', {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
}
</script>

<template>
  <div class="flex w-full" v-if="!pending && customization">
    <CustomizationPanel
      :currentTitle="customization.attributes.title"
      class="flex-none w-1/3"
    />
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

const { data, pending, refresh, error } = await useAsyncData(
  "customization",
  () =>
    findOne("customizations", route.params.id, {
      populate: "widget",
    })
);
customization.value = data.value.data;
let currentComponent;
switch (customization.value.attributes.widget.data.attributes.title) {
  case "Clock":
    currentComponent = resolveComponent("WidgetsClock");
    break;
}
</script>

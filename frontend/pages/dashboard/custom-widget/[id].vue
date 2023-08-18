<template>
  <div class="flex w-full" v-if="customization">
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

const response = await findOne("customizations", route.params.id, {
  populate: "widget",
});
customization.value = response.data;
let currentComponent;
switch (customization.value.attributes.widget.data.attributes.title) {
  case "Clock":
    currentComponent = resolveComponent("WidgetsClock");
    break;
  case "Countdown":
    currentComponent = resolveComponent("WidgetsCountdown");
    break;
}

definePageMeta({
  middleware: "auth",
});
</script>

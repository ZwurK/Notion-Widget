<template>
  <div class="flex w-full">
    <CustomizationPanel class="flex-none w-1/3" />
    <component
      :is="currentComponent"
      v-if="currentComponent"
      class="flex-auto"
    />
  </div>
</template>

<script setup>
import { useWidgetStore } from "~/store/widget";
const widgetStore = useWidgetStore();
let currentComponent;
switch (widgetStore.selectedWidget.name) {
  case "Clock":
    currentComponent = resolveComponent("WidgetsClock");
    break;
}
</script>

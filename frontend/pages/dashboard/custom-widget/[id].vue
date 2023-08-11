<template>   
    <CustomizationPanel />
    <component :is="currentComponent" v-if="currentComponent" />
</template>

<script setup>

import { useWidgetStore } from '~/store/widget';
const widgetStore = useWidgetStore();
let currentComponent;
switch (widgetStore.selectedWidget.name) {
  case "Clock":
    currentComponent = resolveComponent("WidgetsClock");
    break;
}





</script>

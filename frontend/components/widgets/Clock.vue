<template>
  <div
    class="flex items-center justify-center h-screen"
    :style="'background-color: ' + computedClasses('container') + ';'"
  >
    <div
      class="bg-white p-4 px-8 rounded-xl shadow-md"
      :style="'color: ' + computedClasses('font') + ';'"
    >
      <span>{{ hours }}</span
      >:<span>{{ minutes }}</span
      >:<span>{{ seconds }}</span>
    </div>
  </div>
</template>

<script setup>
let hours = ref("00");
let minutes = ref("00");
let seconds = ref("00");

const updateClock = () => {
  const now = new Date();
  hours.value = now.getHours().toString().padStart(2, "0");
  minutes.value = now.getMinutes().toString().padStart(2, "0");
  seconds.value = now.getSeconds().toString().padStart(2, "0");
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(updateClock, 1000);
  updateClock();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

// Customization system

import { useWidgetStore } from "~/store/widget";
const widgetStore = useWidgetStore();

const props = defineProps(["customization"]);
if (props.customization) {
  widgetStore.setEditableProps(props.customization);
} else {
  const editableProps = [
    { target: "font", name: "Text color", type: "color", value: "text-red-500" },
    { target: "container", name: "Background color", type: "color", value: "bg-white" },
  ];
  widgetStore.setEditableProps(editableProps);
}

function computedClasses(target) {
  return widgetStore.editableProps
    .filter((p) => p.target === target)
    .map((p) => p.value);
}
</script>

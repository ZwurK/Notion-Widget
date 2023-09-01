<template>
  <div
    class="text-gray-800 w-screen h-screen text-center flex flex-col justify-center items-center"
    :style="
      'background-color: ' +
      computedClasses('container-background-color') +
      ';' +
      'color: ' +
      computedClasses('font-color') +
      ';'
    "
  >
    <h1 class="font-bold tracking-wider uppercase text-lg">
      {{ computedClasses("heading")[0] }}
    </h1>

    <div
      id="counter"
      class="text-lg flex justify-center items-center space-x-4"
    >
      <button
        @click="decrement"
        class="py-2 px-4 bg-blue-500 text-white rounded"
      >
        Moins
      </button>
      <span>{{ count }}</span>
      <button
        @click="increment"
        class="py-2 px-4 bg-blue-500 text-white rounded"
      >
        Plus
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWidgetStore } from "~/store/widget";
const widgetStore = useWidgetStore();

const props = defineProps(["customization"]);
if (props.customization) {
  widgetStore.setEditableProps(props.customization);
} else {
  const editableProps = [
    {
      target: "font-color",
      name: "Text color",
      type: "color",
      value: "#191919",
    },
    {
      target: "container-background-color",
      name: "Background color",
      type: "color",
      value: "#ffffff",
    },
    { target: "heading", name: "Heading", type: "text", value: "Compteur" },
  ];
  widgetStore.setEditableProps(editableProps);
}

function computedClasses(target) {
  return widgetStore.editableProps
    .filter((p) => p.target === target)
    .map((p) => p.value);
}

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style>
/* Vous pouvez ajouter des styles supplémentaires ici si nécessaire */
</style>

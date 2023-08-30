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
      <h1 id="headline" class="font-bold tracking-wider uppercase text-lg">
        {{ computedClasses("heading")[0] }}
      </h1>
      <div v-if="showQuote">
        <p>"{{ quote }}"</p>
        <small>- {{ author }}</small>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import axios from "axios";
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
      {
        target: "heading",
        name: "Heading",
        type: "text",
        value: "Daily Quote",
      },
    ];
    widgetStore.setEditableProps(editableProps);
  }
  
  function computedClasses(target) {
    return widgetStore.editableProps
      .filter((p) => p.target === target)
      .map((p) => p.value);
  }
  
  const quote = ref("");
  const author = ref("");
  const showQuote = ref(true);
  
  onMounted(async () => {
    try {
      const response = await useFetch(
        "https://api.quotable.io/random"
      );
      quote.value = response.data.value.content;
      author.value = response.data.value.author;
    } catch (error) {
      console.error("There was an error fetching the quote: ", error);
    }
  });
  </script>
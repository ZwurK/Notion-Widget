<template>
  <div class="p-4 flex flex-col bg-gray-100 border-e gap-4">
    <div>
      <label for="title" class="block mb-2 text-md font-bold text-gray-600"
        >Title:</label
      >
      <input
        v-model="title"
        id="title"
        type="text"
        class="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <p class="block mb-2 text-md font-bold text-gray-600">Settings</p>
      <hr />
    </div>
    <div v-for="prop in widgetStore.editableProps" :key="prop.name">
      <label
        class="block mb-2 text-sm font-bold text-gray-600"
        :for="prop.name"
        >{{ prop.name }}</label
      >
      <input
        :class="
          prop.type == 'color'
            ? 'block mb-2 text-sm font-bold text-gray-600'
            : ''
        "
        :id="prop.name"
        :value="prop.value"
        :type="prop.type"
        @change="updateProp(prop.name, $event.target.value)"
      />
    </div>
    <button
      @click="saveCustomization"
      class="w-full py-2 px-4 bg-black text-white rounded"
    >
      Save
    </button>
  </div>
</template>

<script setup>

import { useWidgetStore } from "~/store/widget";
const widgetStore = useWidgetStore();

import { useToast } from "vue-toastification";
const toast = useToast();

const { update } = useStrapi();
const route = useRoute();

const title = ref(props.currentTitle ?? null);

function updateProp(name, value) {
  widgetStore.updatePropValue(name, value);
  console.log(widgetStore.editableProps);
}

const saveCustomization = async () => {
  if (title) {
    try {
      await update("customizations", route.params.id, {
        title: title.value,
        settings: widgetStore.editableProps,
      });
    } catch (error) {
      console.error(error);
      toast.error("An error has occurred, please try again.", {
        timeout: 2000,
        toastClassName: "custom-toast",
      });
    }
  } else {
    console.log("You have to set a title.");
  }
};

const props = defineProps({
  currentTitle: {
    type: String,
    required: true,
  },
});
</script>

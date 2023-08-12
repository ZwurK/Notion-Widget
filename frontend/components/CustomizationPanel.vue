<template>
  <div class="p-4 flex flex-col">
    <input type="text" v-model="title" />
    <div v-for="prop in widgetStore.editableProps" :key="prop.name">
      <label :for="prop.name">{{ prop.name }}</label>
      <input
        :id="prop.name"
        :value="prop.value"
        @change="updateProp(prop.name, $event.target.value)"
      />
    </div>
    <button @click="saveCustomization" class="w-full py-2 px-4 bg-black text-white rounded">Save</button>
  </div>
</template>

<script setup>
import { useWidgetStore } from "~/store/widget";
const widgetStore = useWidgetStore();
const { update } = useStrapi();
const route = useRoute();

const title = ref(null)

function updateProp(name, value) {
  widgetStore.updatePropValue(name, value);
  console.log(widgetStore.editableProps);
}

const saveCustomization = async () => {
  if (title) {
    try {
      await update('customizations', route.params.id, { title: title.value, settings: widgetStore.editableProps })
    } catch(error) {
      console.log(error)
    }
  } else {
    console.log("You have to set a title.")
  }
}


</script>

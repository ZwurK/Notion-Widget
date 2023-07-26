<template>
  <div>
    <!-- Barre de recherche -->
    <div class="container mx-auto p-4">
      <h1 class="text-lg">Find the perfect notion widget.</h1>
      <form @submit.prevent="searchWidgets">
        <div class="flex border rounded overflow-hidden">
          <input v-model="searchQuery" type="text" placeholder="Rechercher des widgets..."
            class="px-4 py-2 w-full outline-none" />
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
            Rechercher
          </button>
        </div>
      </form>
    </div>

    <!-- Affichage de WidgetCard -->
    <div v-if="pending">
      Chargement en cours...
    </div>
    <div v-else class="container mx-auto p-4">
      <WidgetCard v-for="widget in widgetStore.widgets" :key="widget.id" :title="widget.attributes.title"
        :description="widget.attributes.description" :downloads="widget.attributes.downloads" />
    </div>
  </div>
</template>

<script setup>
import { useWidgetStore } from '~/stores/widget';

let searchQuery = ref('');
let pending = ref(false);

const widgetStore = useWidgetStore();

const searchWidgets = async () => {
    pending.value = true;
    await widgetStore.fetchWidgets(searchQuery.value);
    pending.value = false;
};

onMounted(async () => {
    // Si vous souhaitez charger les widgets par défaut lors du montage
    await searchWidgets();
});
</script>

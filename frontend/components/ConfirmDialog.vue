<template>
  <Dialog
    :open="isOpen"
    @close="closeModal"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <!-- Fond sombre (overlay) -->
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-0"
      aria-hidden="true"
    ></div>

    <!-- Modale -->
    <DialogPanel
      class="bg-white border-2 border-black rounded p-6 max-w-xl mx-auto z-10"
    >
      <DialogTitle class="text-xl font-semibold mb-4"
        >Delete a widget</DialogTitle
      >
      <DialogDescription class="text-gray-600 mb-4">
        This action is irrevocable.
      </DialogDescription>
      <p class="mb-4">
        Are you sure you want to delete this widget? Its data will be
        permanently deleted.
      </p>
      <div class="flex justify-end space-x-4">
        <button
          @click="closeModal"
          class="px-4 py-2 bg-black text-white rounded"
        >
          Cancel
        </button>
        <button
          @click="handleDeleteWidget"
          class="px-4 py-2 bg-red-700 text-white rounded"
        >
          Delete
        </button>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  widgetId: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:isOpen"]);

function closeModal() {
  emit("update:isOpen", false);
}

const { delete: _delete } = useStrapi();

const handleDeleteWidget = async () => {
  try {
    if(props.type == "community-widget") {
      const response = await _delete("widgets", props.widgetId);
    } else {
      const response = await _delete("customizations", props.widgetId);
    }
    closeModal();

    toast.success("Widget successfully deleted.", {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  } catch (error) {
    console.error(error);
    toast.error('An error has occurred, please try again.', {
      timeout: 2000,
      toastClassName: "custom-toast",
    });
  }
};

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
</script>

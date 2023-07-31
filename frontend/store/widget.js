import { defineStore } from 'pinia';

export const useWidgetStore = defineStore({
  id: 'widget',

  state: () => ({
    selectedWidgetId: null
  }),

  getters: {
    isSelected: (state) => state.selectedWidgetId !== null
  },

  actions: {
    selectWidget(widgetId) {
      this.selectedWidgetId = widgetId;
    },

    deselectWidget() {
      this.selectedWidgetId = null;
    }
  }
});

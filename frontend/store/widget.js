import { defineStore } from 'pinia';

export const useWidgetStore = defineStore({
  id: 'widget',

  state: () => ({
    selectedWidget: null,
    editableProps: []
  }),

  getters: {
    isSelected: (state) => state.selectedWidgetId !== null
  },

  actions: {
    selectWidget(widget) {
      this.selectedWidget = widget;
    },
    deselectWidget() {
      this.selectedWidget = null;
    },
    setEditableProps(props) {
      this.editableProps = props;
    },
    updatePropValue(name, newValue) {
      const prop = this.editableProps.find(p => p.name === name);
      if (prop) {
        prop.value = newValue;
      }
    }
  }
});

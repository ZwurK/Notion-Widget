import { defineStore } from 'pinia';

export const useWidgetStore = defineStore({
  id: 'widget',

  state: () => ({
    editableProps: []
  }),

  getters: {
    isSelected: (state) => state.selectedWidgetId !== null
  },

  actions: {
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

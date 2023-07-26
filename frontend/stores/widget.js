import { defineStore } from "pinia";

export const useWidgetStore = defineStore({
  id: "widget",
  state: () => {
    return {
      widgets: [],
    };
  },
  getters: {
//     getLikes: (state) => (componentId) => {
//       const component = state.components.find(comp => comp._id === componentId);
//       return component ? component.likes : 0;
//   }
  },
  actions: {
    async fetchWidgets(search) {
      const config = useRuntimeConfig();
      const { data, error, execute } = useFetch(
        config.public.apiBaseUrl + "/api/widgets?_q=" + search,
        {
          method: "GET",
          baseURL: config.public.apiBaseUrl,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      await execute();

      if (error.value) {
        // Handle error
        throw error.value;
      } else {
        this.widgets = data.value.data;
        console.log(this.widgets)
      }
    },

    // async toggleLike(componentId) { // Avoid multiple liking
    //   const userStore = useUserStore();
      
    //   const hasLiked = userStore.user.likedComponents.includes(componentId);
    
    //   if (hasLiked) {
    //     await this.unlike(componentId);
    //     const index = userStore.user.likedComponents.indexOf(componentId);
    //     if (index > -1) {
    //       userStore.user.likedComponents.splice(index, 1);
    //     }
    //   } else {
    //     await this.like(componentId);
    //     userStore.user.likedComponents.push(componentId);
    //   }
    // },

    // async like(componentId) {
    //   const config = useRuntimeConfig();
    //   const userStore = useUserStore();

    //   const { data, error, execute } = useFetch(
    //     config.public.apiBaseUrl + `/api/favorite/like/${componentId}`,
    //     {
    //       method: "PUT",
    //       baseURL: config.public.apiBaseUrl,
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${userStore.token}`,
    //       },
    //     }
    //   );

    //   await execute();

    //   if (error.value) {
    //     // Handle error
    //     throw error.value;
    //   } else {
    //     // Increment the likes attribute of the component
    //     const componentIndex = this.components.findIndex(
    //       (comp) => comp._id === componentId
    //     );
    //     if (componentIndex !== -1) {
    //       const updatedComponent = {
    //         ...this.components[componentIndex],
    //         likes: this.components[componentIndex].likes + 1,
    //       };
    //       this.components.splice(componentIndex, 1, updatedComponent);
          
    //     }
    //     return data;
    //   }
    // },

    // async unlike(componentId) {
    //   const config = useRuntimeConfig();
    //   const userStore = useUserStore();

    //   const { data, error, execute } = useFetch(
    //     config.public.apiBaseUrl + `/api/favorite/unlike/${componentId}`,
    //     {
    //       method: "PUT",
    //       baseURL: config.public.apiBaseUrl,
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${userStore.token}`,
    //       },
    //     }
    //   );

    //   await execute();

    //   if (error.value) {
    //     // Handle error
    //     throw error.value;
    //   } else {
    //     // Decrement the likes attribute of the component
    //     const componentIndex = this.components.findIndex(
    //       (comp) => comp._id === componentId
    //     );
    //     if (componentIndex !== -1) {
    //       const updatedComponent = {
    //         ...this.components[componentIndex],
    //         likes: this.components[componentIndex].likes - 1,
    //       };
    //       this.components.splice(componentIndex, 1, updatedComponent);
    //     }
    //     return data;
    //   }
    // },
  },
});

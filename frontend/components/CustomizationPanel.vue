<template>
    <div class="p-4">
      <!-- Aperçu du widget -->
      <div :style="widgetStyles" class="p-4 border rounded">
        Texte du widget
      </div>
  
      <!-- Interface de personnalisation -->
      <div class="customization-panel mt-4 space-y-4">
        <div>
          <label for="textColor" class="block mb-2">Couleur du texte:</label>
          <input type="color" v-model="textColor" id="textColor" class="border rounded p-1">
        </div>
        <div>
          <label for="textSize" class="block mb-2">Taille du texte:</label>
          <input type="range" v-model="textSize" min="12" max="48" id="textSize" class="w-full">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        textColor: '#000000',
        textSize: '16'
      };
    },
    computed: {
      widgetStyles() {
        return {
          color: this.textColor,
          fontSize: `${this.textSize}px`
        };
      }
    }
  };
  </script>
  
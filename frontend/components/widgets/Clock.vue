<template>
  <div class="flex items-center justify-center h-screen bg-transparent">
    <div class="bg-white p-4 px-8 rounded-xl shadow-md" :class="backgroundColor textSize">
      <span>{{ hours }}</span>:<span>{{ minutes }}</span>:<span>{{ seconds }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'bg-white'
  },
  textSize: {
    type: String,
    default: 'text-4xl'
  }
});

let hours = ref('00');
let minutes = ref('00');
let seconds = ref('00');

const updateClock = () => {
  const now = new Date();
  hours.value = now.getHours().toString().padStart(2, "0");
  minutes.value = now.getMinutes().toString().padStart(2, "0");
  seconds.value = now.getSeconds().toString().padStart(2, "0");
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(updateClock, 1000);
  updateClock();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

</script>

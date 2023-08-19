<template>
  <div
    class="text-gray-800 w-screen h-screen text-center flex flex-col justify-center items-center"
    :style="
      'background-color:' + computedClasses('container-background-color') + ';'
    "
  >
    <div
      class="clock"
      :style="
        'background-color:' + computedClasses('dial-background-color') + ';'
      "
    >
      <div
        class="clock__second"
        ref="secondRef"
        :style="'background-color:' + computedClasses('hand-sec-color') + ';'"
      ></div>
      <div
        class="clock__minute"
        ref="minuteRef"
        :style="'background-color:' + computedClasses('hand-min-color') + ';'"
      ></div>
      <div
        class="clock__hour"
        ref="hourRef"
        :style="'background-color:' + computedClasses('hand-hour-color') + ';'"
      ></div>
      <div class="clock__axis"></div>
      <section
        v-for="indicator in 60"
        :key="indicator"
        class="clock__indicator"
      ></section>
    </div>
  </div>
</template>

<script setup>
//customization

import { useWidgetStore } from "~/store/widget";
const widgetStore = useWidgetStore();

const props = defineProps(["customization"]);
if (props.customization) {
  widgetStore.setEditableProps(props.customization);
} else {
  const editableProps = [
    {
      target: "container-background-color",
      name: "Background color",
      type: "color",
      value: "#191919",
    },
    {
      target: "dial-background-color",
      name: "Dial background color",
      type: "color",
      value: "#191919",
    },
    {
      target: "hand-sec-color",
      name: "Hand seconds color",
      type: "color",
      value: "#F41111",
    },
    {
      target: "hand-min-color",
      name: "Hand minutes color",
      type: "color",
      value: "#F1FAC1",
    },
    {
      target: "hand-hour-color",
      name: "Hand hours color",
      type: "color",
      value: "#F1FAC1",
    },
  ];
  widgetStore.setEditableProps(editableProps);
}

function computedClasses(target) {
  return widgetStore.editableProps
    .filter((p) => p.target === target)
    .map((p) => p.value);
}

// Créez des références pour les éléments que vous souhaitez manipuler
const secondRef = ref(null);
const minuteRef = ref(null);
const hourRef = ref(null);

onMounted(() => {
  const currentSec = getSecondsToday();

  const seconds = (currentSec / 60) % 1;
  const minutes = (currentSec / 3600) % 1;
  const hours = (currentSec / 43200) % 1;

  setTime(60 * seconds, secondRef);
  setTime(3600 * minutes, minuteRef);
  setTime(43200 * hours, hourRef);
});

function setTime(left, handRef) {
  handRef.value.style.animationDelay = `${left * -1}s`;
}

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}
</script>

<style scoped lang="scss">
$black: #1b1e23;
$size: 200px;
$white: #f4eed7;
$feature: #4b9aaa;

html,
body {
  height: 100%;
}
body {
  background: $black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  color: white;
}

p {
  color: $white;
  font-size: 0.8em;
  opacity: 0.75;
}

.clock {
  height: $size;
  width: $size;
  border-radius: #{$size / 2};
  display: flex;
  justify-content: center;
  position: relative;
  &__second,
  &__minute,
  &__hour,
  &__indicator {
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    background: $white;
    transform-origin: bottom center;
    z-index: 2;
    border-radius: 1px;
  }
  &__second {
    height: #{($size / 2) - 10};
    margin-top: 10px;
    background: $feature;
    animation: time 60s infinite steps(60);
    z-index: 3;
  }
  &__minute {
    height: #{($size / 2) - 20};
    margin-top: 20px;
    opacity: 0.75;
    animation: time 3600s linear infinite;
  }
  &__hour {
    height: #{($size / 2) - 40};
    margin-top: 40px;
    animation: time 43200s linear infinite;
  }
  &__indicator {
    height: #{($size / 2) - 2};
    border-top: 2px solid $feature;
    background: none;
  }
  &__indicator:nth-of-type(5n) {
    opacity: 1;
    height: #{($size / 2) - 7};
    border-top: 7px solid $white;
  }
  &__axis {
    background: $feature;
    width: 5px;
    height: 5px;
    border-radius: 3px;
    position: absolute;
    z-index: 4;
    top: #{$size / 2 - 3};
  }
}

@for $i from 1 through 60 {
  section:nth-of-type(#{$i}) {
    transform: rotateZ(calc(6deg * #{$i}));
  }
}

@keyframes time {
  to {
    transform: rotateZ(360deg);
  }
}
</style>

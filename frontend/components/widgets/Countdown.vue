<template>
  <div
    class="text-gray-800 w-screen h-screen text-center flex flex-col justify-center items-center"
    :style="
      'background-color: ' +
      computedClasses('container-background-color') +
      ';' +
      'color: ' +
      computedClasses('font-color') +
      ';'
    "
  >
      <h1 id="headline" class="font-bold tracking-wider uppercase text-lg">
        {{ computedClasses("heading")[0] }}
      </h1>
      <div v-if="showCountdown" id="countdown">
        <ul class="text-sm flex justify-center text-semibold">
          <li class="inline-block list-none p-4 uppercase">
            <span class="block text-">{{ days }}</span> days
          </li>
          <li class="inline-block list-none p-4 uppercase">
            <span class="block">{{ hours }}</span> Hours
          </li>
          <li class="inline-block list-none p-4 uppercase">
            <span class="block">{{ minutes }}</span> Minutes
          </li>
          <li class="inline-block list-none p-4 uppercase hidden md:block">
            <span class="block">{{ seconds }}</span> Seconds
          </li>
        </ul>
      </div>
      <div v-if="showContent" id="content" class="emoji hidden p-4">
        <span class="text-8xl px-2">🥳</span>
        <span class="text-8xl px-2">🎉</span>
        <span class="text-8xl px-2">🎂</span>
      </div>
  </div>
</template>

<script setup>
// customization

import { useWidgetStore } from "~/store/widget";
const widgetStore = useWidgetStore();

const props = defineProps(["customization"]);
if (props.customization) {
  widgetStore.setEditableProps(props.customization);
} else {
  const editableProps = [
    {
      target: "font-color",
      name: "Text color",
      type: "color",
      value: "#191919",
    },
    {
      target: "container-background-color",
      name: "Background color",
      type: "color",
      value: "#ffffff",
    },
    { target: "date", name: "Date", type: "date", value: "2023-09-19" },
    { target: "heading", name: "Heading", type: "text", value: "Countdown" },
  ];
  widgetStore.setEditableProps(editableProps);
}

function computedClasses(target) {
  return widgetStore.editableProps
    .filter((p) => p.target === target)
    .map((p) => p.value);
}

console.log(widgetStore.editableProps);

// System

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const birthday = computed(() => {
  const dateArray = computedClasses("date");
  return dateArray.length ? dateArray[0] : null;
});

const getNextBirthday = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthdayThisYear = new Date(
    `${currentYear}-${birthday.value.slice(5)}`
  );

  return today > birthdayThisYear
    ? new Date(`${currentYear + 1}-${birthday.value.slice(5)}`)
    : birthdayThisYear;
};

let countDownDate = ref(getNextBirthday().getTime());

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const headlineText = ref();
const showCountdown = ref(true);
const showContent = ref(false);

onMounted(() => {
  const updateCountdown = () => {
    const now = Date.now();
    const distance = countDownDate.value - now;

    days.value = Math.floor(distance / DAY);
    hours.value = Math.floor((distance % DAY) / HOUR);
    minutes.value = Math.floor((distance % HOUR) / MINUTE);
    seconds.value = Math.floor((distance % MINUTE) / SECOND);

    if (distance < 0) {
      headlineText.value = "It's my birthday!";
      showCountdown.value = false;
      showContent.value = true;
      clearInterval(interval);
    }
  };

  const interval = setInterval(updateCountdown, 1000);

  watch(birthday, () => {
    countDownDate.value = getNextBirthday().getTime();
    updateCountdown();
  });
});
</script>

<style scoped></style>

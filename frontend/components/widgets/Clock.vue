<template>
  <div class="clock">
    <span id="hours"></span>:<span id="minutes"></span>:<span
      id="seconds"
    ></span>
  </div>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", function () {
  function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  setInterval(updateClock, 1000);
  updateClock();
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #191919;
}

.clock {
  font-size: 2rem;
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}
</style>

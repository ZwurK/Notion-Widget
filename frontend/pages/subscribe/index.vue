<template>
  <div class="w-full">
    <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
      <div
        class="items-center justify-center md:flex md:flex-col gap-10 xl:w-10/12"
      >
        <h1 class="text-3xl text-center mb-2">Take it to the next level !</h1>
        <div class="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-2xl bg-white shadow-xl border-2 transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
          ></div>
          <div class="relative space-y-6 p-6 lg:p-8">
            <h3 class="text-center text-3xl font-semibold text-gray-700">
              Pro plan
            </h3>
            <div>
              <div class="relative flex justify-around">
                <div class="flex items-end">
                  <span class="leading-0 text-8xl font-bold text-gray-800"
                    >3</span
                  >
                  <div class="pb-2">
                    <span class="block text-2xl font-bold text-gray-700"
                      >€</span
                    >
                    <span class="block text-md font-bold text-gray-500"
                      >/month</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600">
              <li class="space-x-2">
                <span class="font-semibold text-purple-500">&check;</span>
                <span>Unlimited widgets</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-purple-500">&check;</span>
                <span>Access to all premium widgets</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold text-purple-500">&check;</span>
                <span>Suggest new widgets.</span>
              </li>
            </ul>
            <button
              type="button"
              class="block font-semibold text-white w-full rounded-xl bg-purple-600 px-6 py-3 text-center transition hover:bg-purple-700 focus:bg-indigo-600 active:bg-purple-800 SS_ProductCheckout"
              data-id="3"
              data-email="etienne.routhier21@gmail.com"
              data-url="http://localhost:1337"
            >
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (localStorage.getItem("reloaded")) {
    localStorage.removeItem("reloaded");
  } else {
    localStorage.setItem("reloaded", "1");
    location.reload();
  }
});

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

useHead({
  script: [
    {
      src: "http://localhost:1337/plugins/strapi-stripe/static/stripe.js",
      type: "text/javascript",
    },
  ],
});
</script>

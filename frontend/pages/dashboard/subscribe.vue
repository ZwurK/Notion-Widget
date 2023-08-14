<template>
<button type="button" class="SS_ProductCheckout" data-id="1" data-email="<userEmail>" data-url="http://localhost:1337"> Subscribe </button>
</template>

<script setup>
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

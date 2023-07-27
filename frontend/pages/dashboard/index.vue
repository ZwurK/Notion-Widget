<template>
  <div class="container mx-auto p-4">
    <!-- Card "My widget" -->
    <NuxtLink to="/dashboard/my-widgets" class="border-2 border-black">

      <!-- Contenu de la card -->
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">My widgets</h2>
        <p class="text-gray-600">
          Click to see your widgets.
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

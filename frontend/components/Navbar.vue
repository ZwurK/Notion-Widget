<template>
  <nav class="bg-white border-b">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-4"><img class="w-10" src="/public/temp.png"><span class="hidden md:block">Notion Workshop</span></NuxtLink>
        <!-- User profile -->
        <div class="flex items-center space-x-2">
          <div
            v-if="token"
            class="w-14 h-14 rounded-full flex items-center justify-center"
          >
            <NuxtLink to="/dashboard" class="text-xl" title="Gestion du compte"
              ><img class="" src="https://media.istockphoto.com/id/877076656/fr/vectoriel/ic%C3%B4ne-de-vecteur-de-panda.jpg?s=612x612&w=0&k=20&c=bwpSgi07IoRauWKVEEklQra43bm6VfkYQaduB3vxqMA="></NuxtLink
            >
          </div>
          <div class="flex gap-4" v-else>
            <NuxtLink
              to="/auth/login"
              class="border border-black font-bold py-1 px-3 rounded"
            >
              Log in
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="text-white bg-black font-bold py-1 px-3 rounded"
            >
              Sign up
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const token = useStrapiToken();
</script>

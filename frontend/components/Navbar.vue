<template>
  <nav class="bg-white border-b">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <NuxtLink to="/official" class="flex items-center gap-4">
          <img class="w-10" src="/public/temp.png">
          <span class="hidden md:block">Notion Workshop</span>
        </NuxtLink>

        <!-- Links for large screens -->
        <div class="hidden sm:flex space-x-4">
          <NuxtLink to="/official" class="text-black hover:text-gray-600">
            Official
          </NuxtLink>
          <NuxtLink to="/community" class="text-black hover:text-gray-600">
            Community
          </NuxtLink>
        </div>

        <!-- Hamburger menu for small screens -->
        <button class="sm:hidden p-2" @click="isMenuOpen = !isMenuOpen">
          <IconsMenu />
        </button>

        <!-- User profile -->
        <div class="flex items-center space-x-2">
          <div v-if="token" class="w-14 h-14 rounded-full flex items-center justify-center">
            <NuxtLink to="/dashboard" class="text-xl" title="Gestion du compte">
              <img src="https://media.istockphoto.com/id/877076656/fr/vectoriel/ic%C3%B4ne-de-vecteur-de-panda.jpg?s=612x612&w=0&k=20&c=bwpSgi07IoRauWKVEEklQra43bm6VfkYQaduB3vxqMA=">
            </NuxtLink>
          </div>
          <div class="flex gap-4" v-else>
            <NuxtLink to="/auth/login" class="border border-black font-bold py-1 px-3 rounded">
              Log in
            </NuxtLink>
            <NuxtLink to="/auth/register" class="text-white bg-black font-bold py-1 px-3 rounded">
              Sign up
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <NuxtLink to="/official" class="block px-4 py-2 hover:bg-gray-200">
          Official
        </NuxtLink>
        <NuxtLink to="/community" class="block px-4 py-2 hover:bg-gray-200">
          Community
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const token = useStrapiToken();
const isMenuOpen = ref(false);
</script>

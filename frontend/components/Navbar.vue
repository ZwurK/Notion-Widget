<template>
  <nav class="bg-white border-b">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-4">
          <img class="w-20" src="/logo.png" alt="logo">
          <span class="text-xl hidden md:block">Notion Widget</span>
        </NuxtLink>

        <!-- Links for large screens -->
        <div class="hidden sm:flex space-x-4">
          <NuxtLink to="/" class="text-black hover:text-gray-600">
            Official
          </NuxtLink>
          <NuxtLink to="/community" class="text-black hover:text-gray-600">
            Community
          </NuxtLink>
          <NuxtLink to="/blog" class="text-black hover:text-gray-600">
            Blog
          </NuxtLink>
        </div>

        <!-- Hamburger menu for small screens -->
        <button class="sm:hidden p-2" @click="isMenuOpen = !isMenuOpen" aria-label="menu">
          <IconsMenu />
        </button>

        <!-- User profile -->
        <div class="flex items-center space-x-2">
          <div v-if="token" class="w-14 h-14 rounded-full flex items-center justify-center">
            <NuxtLink to="/dashboard" class="text-xl" title="Account management">
              <img class="w-20" alt="My account" src="/account.png">
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
        <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-200">
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

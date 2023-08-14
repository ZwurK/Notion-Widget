<template>
  <div class="flex flex-col">
    <div
      class="md:hidden absolute"
      @click="showMenu = true"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <IconsMenu v-if="!hovered" />
      <IconsDoubleChevron v-else />
    </div>
    <div
      class="w-64 min-h-screen border-r md:block bg-white"
      :class="showMenu ? 'absolute z-10' : 'hidden'"
    >
      <div
      class="flex justify-end md:hidden" 
      @click="showMenu = false"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <IconsMenu v-if="!hovered" />
      <IconsDoubleChevron class="rotate-180" v-else />
    </div>
      <div class="flex items-center justify-center mt-8">
        <span class="text-2xl font-semibold">Dashboard</span>
      </div>

      <nav class="mt-10">
        <NuxtLink :class="isActive('/dashboard')" to="/dashboard"
          >Overview</NuxtLink
        >
        <NuxtLink
          :class="isActive(['/dashboard/my-widgets', '/dashboard/create'])"
          to="/dashboard/my-widgets"
          >My widgets</NuxtLink
        >
        <NuxtLink :class="isActive('/dashboard/edit')" to="/dashboard/edit"
          >Edit account</NuxtLink
        >
        <a
          @click="handleLogout"
          class="block px-6 py-2 mt-2 font-semibold hover:bg-gray-200 cursor-pointer"
          >Logout</a
        >
      </nav>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const showMenu = ref(false);
const hovered = ref(false);
const isActive = (paths) => {
  if (typeof paths === "string") paths = [paths];

  if (paths.includes(route.path)) {
    return "block px-6 py-2 mt-2 font-semibold bg-gray-200";
  }
  return "block px-6 py-2 mt-2 font-semibold hover:bg-gray-200";
};

const { logout } = useStrapiAuth();
const handleLogout = () => {
  logout();
  navigateTo("/");
};
</script>

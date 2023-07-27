<template>
  <div class="w-64 min-h-screen border-r">
    <div class="flex items-center justify-center mt-8">
      <span class="text-2xl font-semibold">Dashboard</span>
    </div>

    <nav class="mt-10">
      <NuxtLink
        :class="isActive('/dashboard')"
        to="/dashboard"
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
</template>

<script setup>
const route = useRoute();
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

<template>
    <div class="w-64 min-h-screen bg-gray-800 text-white">
        <div class="flex items-center justify-center mt-8">
            <span class="text-2xl font-semibold">Mon App</span>
        </div>

        <nav class="mt-10">
            <NuxtLink class="block px-6 py-2 mt-2 text-sm font-semibold text-white rounded hover:bg-gray-700">Tableau de
                bord</NuxtLink>
            <NuxtLink to="/dashboard/widgets"
                class="block px-6 py-2 mt-2 text-sm font-semibold text-white rounded hover:bg-gray-700">My widgets
            </NuxtLink>
            <NuxtLink to="/dashboard/edit"
                class="block px-6 py-2 mt-2 text-sm font-semibold text-white rounded hover:bg-gray-700">Edit account
            </NuxtLink>
            <a @click="handleLogout"
                class="block px-6 py-2 mt-2 text-sm font-semibold text-white rounded hover:bg-gray-700">Logout</a>
            <!-- Autres liens... -->
        </nav>
    </div>
</template>

<script setup>

const { logout } = useStrapiAuth()
const handleLogout = () => {
    logout()
    navigateTo('/')
}

</script>
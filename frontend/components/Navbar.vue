<template>
    <div class="bg-gray-800 text-white">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-5">
                <!-- Logo / Nom du site -->
                <div>
                    <a href="/" class="text-2xl font-bold">Widget workshop</a>
                </div>

                <!-- Menu -->
                <div class="flex items-center space-x-4">
                    <a href="/about" class="hover:bg-gray-700 px-3 py-2 rounded">Create</a>
                    <!-- Icône de compte -->
                    <div class="relative">
                        <div v-if="token"
                            class="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                            <NuxtLink to="/dashboard" class="text-xl" title="Gestion du compte">👤</NuxtLink>
                        </div>
                        <div v-else>
                            <NuxtLink to="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Log in
                            </NuxtLink>
                            <NuxtLink to="/register" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Sign up
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const token = useStrapiToken()


</script>

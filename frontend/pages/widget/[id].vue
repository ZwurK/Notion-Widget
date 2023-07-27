<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="max-w-md w-full bg-white shadow-md rounded-lg p-6">
            <!-- <img :src="widget.image" alt="Widget Image" class="w-full h-48 object-cover rounded-t-lg mb-4"> -->
            <h1 class="text-2xl font-bold mb-2">{{ widget.data.attributes.title }}</h1>
            <p class="text-gray-600 mb-4">{{ widget.data.attributes.description }}</p>
            <div class="flex justify-between items-center">
                <span class="text-lg font-semibold">{{ widget.data.attributes.price }}$</span>
                <span class="text-sm bg-gray-200 px-2 py-1 rounded-full">{{ widget.data.attributes.downloads }} downloads</span>
            </div>
            <div class="mt-4">
                <h2 class="text-xl font-medium mb-2">Author:</h2>
                <p class="text-gray-500">{{ widget.data.attributes.author.data.attributes.username }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const route = useRoute()
const { findOne } = useStrapi()
const widget = await findOne('widgets', route.params.id, {populate: 'author'})
console.log(widget.data);

</script>


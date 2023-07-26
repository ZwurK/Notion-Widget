<template>

    <div>test</div>

</template>

<script setup>

definePageMeta({
    layout: 'dashboard'
})

const user = useStrapiUser()
console.log(user)

</script>
<template>
  <div class="relative">    
    <CustomizationPanel />
  </div>
</template>

<script setup>
const iframeCode = ref(null);
const route = useRoute();
const { findOne } = useStrapi();

const updateCode = (code) => {
  iframeCode.value = code;
};

onMounted(async () => {
  try {
    const customization = await findOne("customizations", route.params.id, {
      populate: "widget",
    });
    const codeToGenerate =
      customization.data.attributes.widget.data.attributes.code;
    console.log(codeToGenerate);
    updateCode(codeToGenerate);
  } catch (error) {
    console.error("Error:", error);
  }
});
</script>

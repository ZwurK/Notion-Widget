<template>
  <div class="absolute inset-0 overflow-hidden">
    <iframe
      :srcdoc="iframeCode"
      sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
      allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write;"
      allowpaymentrequest="true"
      allowfullscreen="true"
      loading="lazy"
      class="absolute inset-0 w-full h-full border-0"
    ></iframe>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const iframeCode = ref(null);

onMounted(async () => {
  try {
    const route = useRoute();
    const { findOne } = useStrapi();
    const id = route.params.id;
    const widget = await findOne("widgets", id);
    const codeToGenerate = widget.data.attributes.code;
    updateCode(codeToGenerate);
  } catch (error) {
    console.error("Error:", error);
  }
});

const updateCode = (code) => {
  iframeCode.value = code;
};

</script>

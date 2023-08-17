<template>
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
    <div
      class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue"
    >
    <h1 class="text-4xl">{{ article.attributes.title }}</h1>
      <div class="markdown-content" v-html="md.render(article.attributes.content)"></div>
    </div>
  </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
const article = ref(null);
const { findOne } = useStrapi();
const route = useRoute();

try {
  const { data, pending, refresh, error } = await useAsyncData("article", () =>
    findOne("articles", route.params.id)
  );
  article.value = data.value.data;
} catch (error) {
  console.error(error);
  toast.error("An error has occurred, please try again.", {
    timeout: 2000,
    toastClassName: "custom-toast",
  });
}
</script>

<style>

/* Styles pour le contenu Markdown */

.markdown-content p {
    margin-bottom: 1rem;
}

.markdown-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.markdown-content h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.markdown-content h3 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.markdown-content h4 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.markdown-content h5 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.markdown-content h6 {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.markdown-content a {
    color: #3490dc;
    text-decoration: underline;
}

.markdown-content ul {
    list-style-type: disc;
    padding-left: 2rem;
    margin-bottom: 1rem;
}

.markdown-content ol {
    list-style-type: decimal;
    padding-left: 2rem;
    margin-bottom: 1rem;
}

.markdown-content blockquote {
    border-left: 4px solid #e2e8f0;
    padding-left: 1rem;
    font-style: italic;
}

.markdown-content code {
    background-color: #f7fafc;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
}

.markdown-content pre {
    background-color: #2d3748;
    padding: 1rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    overflow-x: auto;
}

.markdown-content img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}

.markdown-content table {
    width: 100%;
    margin-bottom: 1rem;
    border-collapse: collapse;
}

.markdown-content th, .markdown-content td {
    border: 1px solid #e2e8f0;
    padding: 0.5rem 1rem;
}

.markdown-content th {
    background-color: #f7fafc;
}


</style>
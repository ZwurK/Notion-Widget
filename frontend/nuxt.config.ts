export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-headlessui', '@pinia/nuxt', '@nuxtjs/strapi', '@vueuse/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  strapi: {
    auth: {
      populate: ['widgets', 'customizations']
    }
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      domain: process.env.DOMAIN,
      strapi: {
        cookie: {
          path: '/'
        }
      },
    },
  },

  build: {
    transpile: ['vue-toastification'],
  }

})

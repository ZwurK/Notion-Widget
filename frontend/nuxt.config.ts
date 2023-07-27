export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-headlessui', '@pinia/nuxt', '@nuxtjs/strapi'
  ],

  strapi: {
    auth: {
      populate: ['widgets']
    }
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      strapi: {
        cookie: {
          path: '/'
        }
      },
    },
  }
})

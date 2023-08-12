export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-headlessui', '@pinia/nuxt', '@nuxtjs/strapi', '@vueuse/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    config: {
      purge: {
        options: {
          safelist: ["text-4xl", "bg-red-500"],
        }
      }
    }
  },

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

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Notion Toolbox - Premium Customizable Widgets for Notion",
      meta: [
        {
          name: "description",
          content: "Unlock the full potential of your Notion workspace with our elegant and fully customizable widgets. Enhance productivity and aesthetics now!"
        },
        {
          name: "keywords",
          content: "Notion, Notion widgets, Notion customization, customizable widgets, Notion tools, Notion extensions, Notion integrations, Notion enhancements, Notion dashboard, productivity widgets, interactive Notion widgets, aesthetic Notion widgets, functional Notion widgets, Notion calendar widgets, Notion task widgets, Notion note widgets, Notion reminder widgets, Notion project widgets, Notion tracking widgets, Notion management widgets, Notion collaboration widgets, Notion design widgets, advanced Notion widgets, simple Notion widgets, Notion workflow widgets, Notion automation widgets, Notion API widgets, Notion data widgets, Notion visualization widgets, Notion chart widgets, Notion reporting widgets, Notion analytics widgets, Notion time tracking widgets, Notion habit tracking widgets, Notion budget tracking widgets, Notion finance widgets, Notion education widgets, Notion training widgets, Notion resource widgets, Notion reference widgets, Notion template widgets, Notion plugin widgets, Notion module widgets, Notion theme widgets, Notion style widgets, Notion skin widgets, Notion branding widgets, Notion development widgets, Notion coding widgets, Notion programming widgets, Notion tech widgets, Notion technology widgets, Notion startup widgets, Notion business widgets, Notion marketing widgets, Notion sales widgets, Notion CRM widgets, Notion project management widgets, Notion team management widgets, Notion client management widgets, Notion product management widgets, Notion service management widgets, Notion process management widgets, Notion quality management widgets, Notion performance management widgets, Notion risk management widgets, Notion portfolio management widgets, Notion program management widgets, Notion resource management widgets, Notion budget management widgets, Notion cost management widgets, Notion benefit management widgets, Notion value management widgets, Notion delivery management widgets, Notion lifecycle management widgets, Notion version management widgets, Notion release management widgets, Notion deployment management widgets, Notion configuration management widgets, Notion change management widgets, Notion maintenance management widgets, Notion support management widgets, Notion service management widgets, Notion incident management widgets, Notion problem management widgets, Notion request management widgets, Notion capacity management widgets, Notion availability management widgets, Notion continuity management widgets, Notion security management widgets, Notion compliance management widgets, Notion regulation management widgets, Notion governance management widgets, Notion strategy management widgets, Notion planning management widgets, Notion prioritization management widgets, Notion decision management widgets, Notion communication management widgets, Notion documentation management widgets, Notion training management widgets, Notion skill management widgets, Notion talent management widgets, Notion career management widgets, Notion recruitment management widgets, Notion retention management widgets, Notion motivation management widgets, Notion satisfaction management widgets, Notion reward management widgets, Notion recognition management widgets, Notion feedback management widgets, Notion review management widgets, Notion development management widgets, Notion coaching management widgets, Notion mentoring management widgets, Notion network management widgets, Notion community management widgets, Notion culture management widgets, Notion diversity management widgets, Notion inclusion management widgets, Notion well-being management widgets, Notion health management widgets, Notion safety management widgets, Notion environment management widgets, Notion sustainability management widgets, Notion responsibility management widgets, Notion citizenship management widgets, Notion philanthropy management widgets, Notion volunteering management widgets, Notion partnership management widgets, Notion supplier management widgets, Notion customer management widgets, Notion competitor management widgets, Notion market management widgets, Notion segment management widgets, Notion niche management widgets, Notion trend management widgets, Notion innovation management widgets, Notion research management widgets, Notion launch management widgets, Notion growth management widgets, Notion maturity management widgets, Notion decline management widgets, Notion rebirth management widgets, Notion pivot management widgets, Notion diversification management widgets, Notion specialization management widgets, Notion generalization management widgets, Notion standardization management widgets, Notion differentiation management widgets, Notion commoditization management widgets, Notion personalization management widgets, Notion globalization management widgets, Notion localization management widgets, Notion centralization management widgets, Notion decentralization management widgets, Notion integration management widgets, Notion disintegration management widgets, Notion coordination management widgets, Notion cooperation management widgets, Notion competition management widgets, Notion collaboration management widgets, Notion co-creation management widgets"
        },
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-headlessui', '@pinia/nuxt', '@nuxtjs/strapi', '@vueuse/nuxt', 'nuxt-simple-sitemap'
  ],

  css: ['~/assets/css/main.css'],

  strapi: {
    auth: {
      populate: ['widgets', 'customizations', 'role']
    }
  },

  routeRules: {
    '/dashboard/**': { ssr: false },
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
  },

})

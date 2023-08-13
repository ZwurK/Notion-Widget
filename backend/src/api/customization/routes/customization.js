const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::customization.customization", {
  config: {
    delete: {
      policies: ["global::is-owned"],
    },
    update: {
      policies: ["global::is-owned"],
    },
  },
});
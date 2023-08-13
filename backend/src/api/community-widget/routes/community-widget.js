const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::community-widget.community-widget", {
  config: {
    delete: {
      policies: ["global::is-owned"],
    },
    update: {
      policies: ["global::is-owned"],
    },
  },
});
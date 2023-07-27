const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::widget.widget", {
  config: {
    delete: {
      policies: ["global::is-owned"],
    },
    update: {
      policies: ["global::is-owned"],
    },
  },
});

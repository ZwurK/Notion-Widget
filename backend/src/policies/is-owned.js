module.exports = async (policyContext, config, { strapi }) => {
  const user = policyContext.state.user;
  const itemId = policyContext.params.id;

  let collectionName = null;
  // Récupérez le nom de la collection à partir de l'URL
  if(policyContext.state.route.path == '/customizations/:id') {
    collectionName = 'api::customization.customization';
  } else {
    collectionName = 'api::community-widget.community-widget';
  }

  console.log(collectionName);

  // Utilisez ce nom pour effectuer la requête findOne
  const item = await strapi.entityService.findOne(collectionName, itemId, { populate: { author: true } });

  if (!item || !item.author || item.author.id !== user.id) {
      return false;
  }

  return true;
};

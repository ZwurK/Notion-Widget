module.exports = async (policyContext, config, { strapi }) => {

    const user = policyContext.state.user;
  
    const widgetId = policyContext.params.id;

    console.log(user)
    console.log(widgetId)

    const widget = await strapi.entityService.findOne('api::widget.widget', widgetId, {populate: { author: true }});
  
    if (!widget || !widget.author || widget.author.id !== user.id) {
      return false;
    }
  
    return true;
  };
  
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/webhook",
      handler: "stripe.updateRoleSubscriber",
    },
  ],
};

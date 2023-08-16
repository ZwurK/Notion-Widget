
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/stripe-webhook',
        handler: 'webhook.updateRoleSubscriber',
      }
    ]
  }
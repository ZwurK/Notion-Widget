// @ts-ignore
const stripe = require("stripe")(
  process.env.STRAPI_ADMIN_TEST_STRIPE_SECRET_KEY
);

module.exports = {
  async updateRoleSubscriber(ctx) {
    // Récupération de la signature du header
    const sig = ctx.request.header["stripe-signature"];
    const endpointSecret =
      "whsec_8d10ddf0b73930ca95ecacbe8e24c7dcfa4fed61f73f080ead94eab2feb45d86";

    let event;

    const raw = ctx.request.body[Symbol.for("unparsedBody")];

    try {
      event = stripe.webhooks.constructEvent(raw, sig, endpointSecret);
    } catch (err) {
      ctx.status = 400;
      ctx.body = `Webhook Error: ${err.message}`;
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        if (paymentIntentSucceeded.customer) {
          const customer = await stripe.customers.retrieve(
            paymentIntentSucceeded.customer
          );
          const email = customer.email;

          const user = await strapi.db
          .query("plugin::users-permissions.user")
          .findOne({
            where: { email: email },
          });

          if (!user) {
            ctx.status = 404;
            ctx.body = { error: "User not found" };
            return;
          }

          await strapi.db.query("plugin::users-permissions.user").update({
            where: { email: email },
            data: {
              role: 3
            },
          });
        }
        break;
      // ... handle other event types
      default:
      // console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    ctx.status = 200;
    ctx.body = { received: true };
  },
};

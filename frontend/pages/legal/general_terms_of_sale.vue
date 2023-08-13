<template>
  <div class="bg-white p-8 rounded container flex flex-col gap-5">
    <h1 class="text-2xl font-bold mb-4">General Terms of Sale</h1>

    <section class="mb-4">
      <p class="mb-2">
        The General Terms of Sale govern commercial relationships. They inform
        your customers of their rights and obligations when purchasing your
        products and/or services. This transparency significantly reduces the
        risk of disputes.
      </p>
    </section>

    <section class="mb-4">
      <h2 class="text-xl font-semibold mb-2">For Individual Customers</h2>
      <ul class="list-disc pl-5 mb-2">
        <li>Essential characteristics of goods and/or services</li>
        <li>Total price including taxes (TTC): {{ priceInEuros }}</li>
        <li>Delivery fees, date, and terms</li>
        <li>Contract execution terms</li>
        <li>Payment terms: accepted payment methods and late payment issues</li>
        <li>
          Right of withdrawal: time frame and conditions for canceling and
          returning the order
        </li>
        <li>Legal guarantee of conformity and hidden defects guarantee.</li>
        <li>
          Commercial warranty and after-sales service: remote communication cost
        </li>
        <li>Contract duration and termination conditions, if applicable</li>
        <li>
          Deposit or guarantee to be provided by the customer, if applicable
        </li>
        <li>
          Minimum duration of the customer's contractual obligations, if
          applicable
        </li>
        <li>
          Existence of a code of conduct applicable to the contract, if
          applicable
        </li>
        <li>
          Dispute resolution methods: competent court and possibility of using a
          mediator
        </li>
      </ul>
    </section>
    <h1 class="text-2xl font-bold mb-4">Subscription Cancellation Terms</h1>

    <section class="mb-4">
      <p class="mb-2">
        Since June 1, 2023, a free electronic means for consumers to cancel
        their subscription contracts must be provided. This obligation applies
        even if the initial contract was not concluded electronically.
      </p>
      <p class="mb-2">
        This functionality should be directly and easily accessible from your
        website (or mobile application) where contracts are concluded.
      </p>
    </section>

    <section class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Mandatory Information</h2>
      <p class="mb-2">
        The functionality should be presented under the label "cancel your
        contract" or a similar unambiguous phrase in readable characters.
        Additionally, it should provide clear and understandable information
        about the cancellation terms (e.g., notice period, cancellation fees,
        consequences of cancellation, etc.).
      </p>
    </section>

    <section class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Consumer Identification</h2>
      <p class="mb-2">
        The functionality should allow the consumer to provide or confirm the
        accuracy of the following information:
      </p>
      <ul class="list-disc pl-5 mb-2">
        <li>
          Consumer's first and last name, or if a contract was concluded with a
          legal entity, its business name
        </li>
        <li>
          Email address or, if not available, postal address to confirm receipt
          of the cancellation notification
        </li>
        <li>
          Any reference previously communicated to the contract holder to
          identify the holder and the concerned contract (e.g., a customer or
          contract number)
        </li>
        <li>
          Desired cancellation date, subject to legal or contractual provisions
        </li>
        <li>
          If the cancellation concerns a phone subscription, the phone number of
          the line or lines affected by the cancellation
        </li>
      </ul>
      <p class="mb-2">
        After providing or confirming this information, the consumer should be
        able to access a summary page to verify and, if necessary, modify the
        provided information.
      </p>
    </section>

    <section class="mb-4">
      <h2 class="text-xl font-semibold mb-2">Notification of Cancellation</h2>
      <p class="mb-2">
        The consumer should be able to notify you of the contract cancellation
        through a function directly accessible from the summary page of their
        information. This function should be presented with the label
        "notification of cancellation" or a similar unambiguous phrase in
        readable characters.
      </p>
      <p class="mb-2">
        Upon receiving the cancellation notification from the consumer, you must
        confirm receipt of the notification and inform them, on a durable
        medium, within a reasonable time frame,
        about the effects of the cancellation and the date the contract ends.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "GeneralTermsOfSale",
  data() {
    return {
      priceInEuros: "10€",
    };
  },
};
</script>

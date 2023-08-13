<template>
    <div class="bg-white p-8 rounded container flex flex-col gap-5 ">
      <h1 class="text-2xl font-bold mb-4">Legal Notice</h1>
  
      <section class="mb-4">
        <h2 class="text-xl font-semibold mb-2">Identification of the Company:</h2>
        <ul class="list-disc pl-5">
          <li>Name: {{ firstName }} {{ lastName }}</li>
          <li v-if="isEntrepreneur">Designation: Individual Entrepreneur (EI)</li>
        </ul>
      </section>
  
      <section class="mb-4">
        <h2 class="text-xl font-semibold mb-2">Registration Information:</h2>
        <p>Company Registration Number (RCS): {{ rcsNumber }}</p>
      </section>
  
      <section class="mb-4">
        <h2 class="text-xl font-semibold mb-2">Contact Information:</h2>
        <ul class="list-disc pl-5">
          <li>Email: {{ email }}</li>
          <li>Phone: {{ phone }}</li>
        </ul>
      </section>
  
      <section class="mb-4">
        <h2 class="text-xl font-semibold mb-2">VAT Identification Number:</h2>
        <p>{{ vatId }}</p>
      </section>
  
      <section class="mb-4">
        <h2 class="text-xl font-semibold mb-2">Website Hosting Information:</h2>
        <ul class="list-disc pl-5">
          <li>Host Name or Company Name: {{ hostName }}</li>
          <li>Address: {{ hostAddress }}</li>
          <li>Email: {{ hostPhone }}</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: 'Etienne',
        lastName: 'Routhier',
        isEntrepreneur: true, // Change to false if not an entrepreneur
        rcsNumber: '92343463300015',
        email: 'etienne.routhier21@gmail.com',
        phone: '+33770030868',
        vatId: 'FR92343463300015',
        hostName: 'Hostinger',
        hostAddress: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
        hostPhone: 'https://www.hostinger.fr/contact'
      };
    },
  };
  </script>
  
  
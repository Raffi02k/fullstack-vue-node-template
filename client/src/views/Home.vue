<template>
  <div class="home-view flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 p-4">
    <div class="text-center w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-gray-200">

      <!-- Huvudrubrik -->
      <h1 class="text-5xl font-extrabold text-gray-900 mb-4">
        Välkommen till Mästarmallen!
      </h1>

      <!-- Introduktion -->
      <p class="text-xl text-gray-600 mb-8">
        Din fullstack-miljö är nu igång med Vue, Node/Express och MySQL.
      </p>

      <!-- CTA / Statusbox -->
      <div class="bg-indigo-50 p-6 rounded-xl shadow-inner border border-indigo-200">
        <h2 class="text-2xl font-bold text-indigo-700 mb-3 flex items-center justify-center space-x-2">
          <span>Kom igång nu</span>
        </h2>

        <p class="text-gray-700 mb-4">
          Denna sida är öppen för alla. Logga in för att komma åt den skyddade Dashboard.
        </p>

        <!-- Visuella steg -->
        <div class="flex justify-center space-x-4 text-sm font-medium">
          <span class="p-2 bg-white text-indigo-600 rounded-full shadow-md">1. Registrera</span>
          <span class="p-2 bg-white text-indigo-600 rounded-full shadow-md">2. Logga In</span>
          <span class="p-2 bg-white text-indigo-600 rounded-full shadow-md">3. Dashboard (Skyddad)</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Denna vy är en statisk startsida, så ingen script-logik behövs.
</script>

<style scoped>
/* Inga extra CSS-klasser krävs eftersom Tailwind CSS hanterar all layout och design. */
</style>

<template>
  <div id="app-wrapper">
    <Navbar />

    <main class="content-area">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// Ingen annan logik behövs här för mallen
</script>

<style>
/* Globala stilar för hela appen */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-area {
  flex-grow: 1; /* Säkerställer att innehållsytan tar all tillgänglig plats */
  padding-bottom: 70px; /* Ger plats åt den fixede footern */
}
</style>

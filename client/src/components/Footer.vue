<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Fullstack Template | Återanvändbar kodbas</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 15px;
  background-color: #eee;
  border-top: 1px solid #ccc;
  position: fixed; /* För att hålla den längst ner i mallen */
  bottom: 0;
  width: 100%;
}
</style>

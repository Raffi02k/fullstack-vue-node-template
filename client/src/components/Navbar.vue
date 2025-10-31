<template>
  <nav class="navbar">
    <router-link to="/" class="logo">Fullstack Template</router-link>
    <div class="nav-links">
      <router-link to="/">Hem</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/login">Logga In</router-link>
      <router-link to="/register">Registrera</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}
.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 15px;
}
</style>

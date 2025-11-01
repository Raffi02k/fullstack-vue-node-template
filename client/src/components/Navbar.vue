<template>
  <nav class="navbar">
    <!-- Logotyp -->
    <router-link to="/" class="logo">
      Fullstack Template
    </router-link>

    <div class="nav-links">

      <!-- Länkar för INLOGGADE användare (isAuthenticated = true) -->
      <template v-if="isAuthenticated">
        <!-- Nu syns 'Hem' ENDAST när man är inloggad -->
        <router-link to="/">Hem</router-link>
        <router-link to="/dashboard">Dashboard</router-link>

        <button @click="handleLogout" class="nav-button">
          Logga Ut
        </button>
      </template>

      <!-- Länkar för OINLOGGADE användare (isAuthenticated = false) -->
      <template v-else>
        <router-link to="/login">Logga In</router-link>
        <router-link to="/register" class="nav-button nav-button--primary">
          Registrera
        </router-link>
      </template>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'; // Import watch
import { useRouter } from 'vue-router';

const isAuthenticated = ref(false);
const router = useRouter();

// Funktion för att kontrollera om token finns i localStorage
const checkAuthStatus = () => {
  isAuthenticated.value = !!localStorage.getItem('user_token');
};

// Logik för att logga ut
const handleLogout = () => {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_name');
  isAuthenticated.value = false;

  console.log('Du är utloggad. Omdirigerar till inloggning.');

  // Omdirigera till login-sidan (som önskat)
  router.push('/login');
};

// ----------------------------------------------------
// Dynamisk uppdatering av Navbar när login/logout sker
// ----------------------------------------------------

// LÖSNING: Övervaka ändringar i routen. När en navigering är klar (t.ex. efter login),
// körs checkAuthStatus för att tvinga fram en uppdatering.
watch(
    () => router.currentRoute.value.fullPath,
    (newPath, oldPath) => {
      // Endast kör om sidan faktiskt byter plats (t.ex. Login -> Dashboard)
      if (newPath !== oldPath) {
        checkAuthStatus();
      }
    }
);


// Lyssnar på 'storage' eventet (bra för att synkronisera mellan flikar)
const handleStorageChange = (e) => {
  if (e.key === 'user_token') {
    checkAuthStatus();
  }
};

onMounted(() => {
  checkAuthStatus();
  window.addEventListener('storage', handleStorageChange);
});

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange);
});

defineExpose({
  checkAuthStatus
});
</script>

<style scoped>
/* Återställd CSS baserat på dina önskemål, med tillägg för knappar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #4CAF50; /* Grön hover för att indikera interaktivitet */
}

/* Stil för knappar (Logga Ut, Registrera) */
.nav-button {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 15px;
  transition: background-color 0.2s, border-color 0.2s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: #4CAF50;
}

.nav-button--primary {
  background-color: #4CAF50; /* Primär färg för Registrera */
  border-color: #4CAF50;
}

.nav-button--primary:hover {
  background-color: #45a049;
  border-color: #45a049;
}
</style>

<template>
  <div class="dashboard-view p-8 max-w-4xl mx-auto bg-white shadow-xl rounded-xl mt-10">
    <h1 class="text-4xl font-extrabold mb-6 text-indigo-700 border-b pb-2">Kontrollpanel (Skyddad)</h1>

    <div v-if="loading" class="text-lg text-gray-600 py-10">
      Laddar din profil...
    </div>

    <div v-else-if="fetchError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
      <strong class="font-bold">Fel vid inloggning:</strong>
      <span class="block sm:inline"> {{ fetchError }}</span>
      <p class="mt-2 text-sm">Vänligen logga in igen för att återställa din session.</p>
    </div>

    <div v-else class="text-left">
      <h2 class="text-3xl font-semibold mb-4 text-gray-800">Välkommen, {{ userName }}!</h2>
      <p class="text-lg text-gray-600 mb-6">Detta är en **skyddad vy**. Endast inloggade användare kan se detta innehåll.</p>

      <div class="space-y-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <p class="font-medium text-gray-700">Användar-ID från API: <span class="font-mono text-sm bg-gray-200 p-1 rounded">{{ userId }}</span></p>
        <p class="font-medium text-gray-700">Token är aktiv: <span class="text-green-600">Ja</span></p>
      </div>

      <button @click="handleLogout"
              class="mt-8 bg-red-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-200 shadow-lg">
        Logga ut
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/apiService';

const userName = ref(localStorage.getItem('user_name') || 'Användare');
const userId = ref(null);
const loading = ref(true);
const fetchError = ref(null);
const router = useRouter();

// Kontrollerar autentisering och hämtar användardata
const fetchUserProfile = async () => {
  if (!localStorage.getItem('user_token')) {
    loading.value = false;
    router.push('/login');
    return;
  }

  try {
    const response = await api.get('/users/profile');

    // Uppdatera lokal information från API-svaret
    userId.value = response.data.user.id;
    userName.value = response.data.user.name;

  } catch (err) {
    // Om backend returnerar 401/403 (Token ogiltig)
    fetchError.value = err.response?.data?.message || 'Ett fel uppstod. Vänligen logga in igen.';
    handleLogout(true); // Tvinga utloggning och skickar till /login
  } finally {
    loading.value = false;
  }
};

const handleLogout = (expired = false) => {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_name');

  // Vi använder console.log istället för alert
  console.log(expired ? 'Sessionen har gått ut. Omdirigerar till inloggning.' : 'Du är utloggad. Omdirigerar till inloggning.');

  router.push('/login');
};

onMounted(fetchUserProfile);
</script>

<style scoped>
/* Den tidigare CSS:en är ersatt med Tailwind-klasser */
</style>

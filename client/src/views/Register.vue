<template>
  <div class="register-view flex justify-center items-center min-h-screen bg-gray-100 p-4">
    <div class="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
      <h2 class="text-3xl font-extrabold mb-6 text-center text-gray-800">Registrera Konto</h2>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Namn</label>
          <input type="text" id="name" v-model="name" required
                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-postadress</label>
          <input type="email" id="email" v-model="email" required
                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Lösenord</label>
          <input type="password" id="password" v-model="password" required
                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
        </div>

        <button type="submit"
                class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 shadow-md">
          Registrera
        </button>
      </form>

      <p v-if="registerError" class="mt-4 text-sm text-red-600 text-center">{{ registerError }}</p>
      <p v-if="successMessage" class="mt-4 text-sm text-green-600 text-center">{{ successMessage }}</p>

      <p class="mt-6 text-sm text-center text-gray-600">
        Har du redan ett konto?
        <router-link to="/login" class="text-indigo-600 hover:text-indigo-800 font-medium transition duration-200">
          Logga in här
        </router-link>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// Importen förutsätter att du har sparat apiService.js i client/src/services/
import api from '../services/apiService';

const name = ref('');
const email = ref('');
const password = ref('');
const registerError = ref(null);
const successMessage = ref(null);
const router = useRouter();

const handleRegister = async () => {
  registerError.value = null;
  successMessage.value = null;

  try {
    // Anropar din backend-rutt: /api/auth/register
    const response = await api.post('/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    console.log('Registrering lyckades:', response.data.message);
    successMessage.value = 'Registrering lyckades! Du omdirigeras nu till inloggning.';

    // Omdirigera efter en kort fördröjning
    setTimeout(() => {
      router.push('/login');
    }, 1500);


  } catch (err) {
    // Hantera fel från backend (t.ex. E-post redan i bruk)
    registerError.value = err.response?.data?.message || 'Ett oväntat fel uppstod vid registrering.';
  }
};
</script>

<style scoped>
/* Inga särskilda stilar behövs då Tailwind CSS används */
</style>

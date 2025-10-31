<template>
  <div class="auth-container">
    <h2>Logga In</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">E-post:</label>
        <input type="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Lösenord:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Logga in</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/apiService';

const email = ref('');
const password = ref('');
const error = ref(null);
const router = useRouter();

const handleLogin = async () => {
  error.value = null; // Rensa tidigare fel
  try {
    const response = await api.post('/auth/login', {
      email: email.value,
      password: password.value,
    });

    // Hantera JWT-token och användardata
    const { token, user } = response.data;

    // 1. Lagra token
    localStorage.setItem('user_token', token);

    // 2. Lagra användarinformation (om du vill visa t.ex. namnet)
    localStorage.setItem('user_name', user.name);

    console.log('Inloggning lyckades!', user.name);

    // 3. Navigera till Dashboard
    router.push('/dashboard');

  } catch (err) {
    // Visa felmeddelande från backend
    error.value = err.response?.data?.message || 'Ett oväntat fel uppstod vid inloggning.';
  }
};
</script>

<style scoped>
/* Enkel styling för mallen */
.auth-container { max-width: 400px; margin: 40px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
.form-group { margin-bottom: 15px; }
label { display: block; margin-bottom: 5px; font-weight: bold; }
input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
button { padding: 10px 15px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; }
.error-message { color: red; margin-top: 10px; }
</style>

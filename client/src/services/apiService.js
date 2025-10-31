import axios from 'axios';

// 1. Skapa en grundläggande Axios-instans
const api = axios.create({
    // Bas-URL för din Node.js backend
    // Observera: Din backend körs på port 3000
    baseURL: 'http://localhost:3000/api',

    // Standardinställningar för headers
    headers: {
        'Content-Type': 'application/json',
    },

    // 2. Viktigt: Tillåt cookies/credentials (för JWT i cookies om du använder dem, eller bara som standard)
    withCredentials: true,
});

// 3. JWT Interceptor: Lägg till token till varje skyddat anrop
// Detta körs INNAN ett anrop skickas till servern
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('user_token');

        // Lägg till JWT som en Bearer-token i Authorization-headern
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

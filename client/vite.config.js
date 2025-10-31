// client/vite.config.js

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Skapar konfigurationsobjektet för Vite
export default defineConfig({
    plugins: [
        // 1. Viktigt: Lägger till Vue-pluginet
        vue(),
    ],
    resolve: {
        alias: {
            // 2. Definierar en alias för enkel hantering av sökvägar i koden (t.ex. '@' pekar på './src')
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 3. Konfigurerar dev-servern (Valfritt men bra)
    server: {
        port: 5173 // Standardporten för Vue/Vite
    }
})

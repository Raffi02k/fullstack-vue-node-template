# ⚙️ Fullstack Template (Node.js + Vue 3 + MySQL + JWT Auth)

Detta är en robust och återanvändbar mall för agila fullstack-projekt, komplett med en grundläggande autentiseringslösning. Perfekt för snabb utveckling och utbildning.

---

## 🧩 Teknisk Stack

* **Frontend:** Vue 3 (Vite, Composition API, Vue Router)
* **Backend:** Node.js (Express)
* **Databas:** MySQL
* **Auth:** JSON Web Tokens (JWT) + bcrypt
* **Kommunikation:** Axios
* **Miljö:** .env-filer och valfri Docker-konfiguration.

---

## 🚀 Starta Projektet (Lokalt)

**Förutsättningar:** Node.js och en lokal MySQL-server.

### 1. Backend (Server)

1.  Gå till serverkatalogen och installera beroenden:
    ```bash
    cd backend
    npm install
    ```
2.  Skapa `.env` från exemplet och konfigurera databasen:
    ```bash
    cp .env.example .env
    # Uppdatera DB_HOST, DB_USER, DB_PASS, DB_NAME och JWT_SECRET
    ```
3.  Kör servern:
    ```bash
    npm run dev
    ```

### 2. Frontend (Client)

1.  Gå till klientkatalogen och installera beroenden:
    ```bash
    cd client
    npm install
    ```
2.  Skapa `.env` från exemplet:
    ```bash
    cp .env.example .env
    # Kontrollera att VITE_API_BASE_URL pekar mot din backend
    ```
3.  Kör klienten:
    ```bash
    npm run dev
    ```

---

## 🐳 3. Starta Projektet med Docker (Valfritt)

Om du väljer att använda Docker, se till att konfigurera `server/.env` med de variabler som används i `docker-compose.yml`.

---

## 💡 Tips för Nya Projekt

1.  Klicka **"Use this template"** på GitHub.
2.  Ersätt eller lägg till nya routes, controllers och tjänster baserat på ditt nya projekt (t.ex. skapa `boatController.js`).
3.  Byt ut det visuella innehållet i `Home.vue` och `Dashboard.vue`.

---

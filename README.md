# ⚙️ Fullstack Template (Node.js + Vue 3 + MySQL + JWT Auth)

This is a robust and reusable template for agile fullstack projects, complete with a basic authentication system. Perfect for fast development and learning environments.

---

## 🧩 Tech Stack

* **Frontend:** Vue 3 (Vite, Composition API, Vue Router)
* **Backend:** Node.js (Express)
* **Database:** MySQL
* **Auth:** JSON Web Tokens (JWT) + bcrypt
* **Communication:** Axios
* **Environment:** .env files and optional Docker configuration

---

## 🚀 Run the Project (Locally)

**Requirements:** Node.js and a local MySQL server.

### 1. Backend (Server)

1. Navigate to the server directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```
2. Create an `.env` file from the example and configure your database:

   ```bash
   cp .env.example .env
   # Update DB_HOST, DB_USER, DB_PASS, DB_NAME and JWT_SECRET
   ```
3. Run the server:

   ```bash
   npm run dev
   ```

---

### 2. Frontend (Client)

1. Navigate to the client directory and install dependencies:

   ```bash
   cd client
   npm install
   ```
2. Create an `.env` file from the example:

   ```bash
   cp .env.example .env
   # Make sure VITE_API_BASE_URL points to your backend
   ```
3. Run the client:

   ```bash
   npm run dev
   ```

---

## 🐳 3. Run the Project with Docker (Optional)

If you choose to use Docker, make sure to configure the `server/.env` file with the variables used in `docker-compose.yml`.

---

## 💡 Tips for New Projects

1. Click **"Use this template"** on GitHub.
2. Replace or add new routes, controllers, and services based on your new project (for example, create `boatController.js`).
3. Customize the visual content in `Home.vue` and `Dashboard.vue`.

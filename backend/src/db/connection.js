// backend/db/connection.js

import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

// Skapa anslutningspoolen baserat på .env-variablerna
const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'yourpassword',
    database: process.env.DB_NAME || 'myapp',
});

// Testa att anslutningen fungerar när servern startar
db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        if (err.code === 'ECONNREFUSED') {
            console.error('Se till att din MySQL-server är igång och att .env-variablerna är korrekta.');
        }
        return;
    }

    console.log('🔗 Successfully connected to MySQL database!');
    connection.release();
});

export default db;

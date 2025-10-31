// server/middleware/authMiddleware.js

import jwt from 'jsonwebtoken';
import db from '../db/connection.js';
export const protect = (req, res, next) => {
    let token;

    // 1. Kontrollera om Authorization-headern finns och börjar med 'Bearer'
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Hämta token från headern (del [1] efter "Bearer ")
            token = req.headers.authorization.split(' ')[1];

            // 2. Verifiera token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 3. Hämta användaren från databasen baserat på ID i token
            db.query('SELECT id, name, email FROM users WHERE id = ?', [decoded.id], (err, results) => {
                if (err || results.length === 0) {
                    return res.status(401).json({ message: 'Not authorized, user not found' });
                }

                // Lägg till användarobjektet (utan lösenord) till request-objektet
                req.user = results[0];
                next(); // Fortsätt till nästa middleware/controller
            });

        } catch (error) {
            console.error('Token verification error:', error);
            return res.status(401).json({ message: 'Not authorized, token failed or expired' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

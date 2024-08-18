const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');
const bcryptjs = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use helmet to set security headers
app.use(helmet());

// Create a rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Apply the rate limiter to all requests
app.use(limiter);

// Serve static files from the Public directory
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.json());

// Initialize MySQL connection
let db;

async function initDB() {
    try {
        db = await mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        console.log('Database connection successful');
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
        process.exit(1); // Exit the process if database connection fails
    }
}

initDB();

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'home.html'));
});

app.get('/signup_customer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'signup_customer.html'));
});

app.get('/signin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'signin.html'));
});

app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'dashboard.html'));
});

// Handle POST request for user signup as a customer
const saltRounds = 10;

app.post('/api/signup/customer', [
    body('fullName').trim().isLength({ min: 1 }).escape(),
    body('address').trim().isLength({ min: 1 }).escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }).trim().escape()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { fullName, address, email, password } = req.body;
        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists! Please Sign in' });
        }

        const hashedPassword = await bcryptjs.hash(password, saltRounds);
        await db.query(
            'INSERT INTO users (fullName, address, email, password, userType) VALUES (?, ?, ?, ?, ?)',
            [fullName, address, email, hashedPassword, 'customer']
        );

        return res.redirect('/signin.html');
    } catch (error) {
        console.error('Error signing up user:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Handle POST request for user signin
app.post('/api/signin', [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }).trim().escape()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const [userData] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (userData.length === 0) {
            return res.status(404).send('User not found');
        }

        const hashedPassword = userData[0].password;
        const match = await bcryptjs.compare(password, hashedPassword);

        if (match) {
            return res.status(200).json(userData[0]);
        } else {
            return res.status(401).send('Invalid password');
        }
    } catch (error) {
        console.error('Error signing in user:', error);
        return res.status(500).send('Failed to sign in');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error stack:', err.stack);
    console.error('Error message:', err.message);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

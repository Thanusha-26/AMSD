const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Cookie parser middleware
app.use(cookieParser());

// Session middleware
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

// Home route
app.get('/', (req, res) => {
    res.send('Session Management Example');
});

// Set session value
app.get('/login', (req, res) => {
    req.session.username = 'Admin';
    res.send('Session created. User logged in.');
});

// Access session
app.get('/dashboard', (req, res) => {
    if (req.session.username) {
        res.send(`Welcome ${req.session.username}`);
    } else {
        res.send('Please login first');
    }
});

// Destroy session
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Session destroyed. Logged out.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

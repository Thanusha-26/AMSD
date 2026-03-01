const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
    secret: 'authsecret',
    resave: false,
    saveUninitialized: true
}));

// Login page
app.get('/', (req, res) => {
    res.send(`
        <h2>Login</h2>
        <form method="POST" action="/login">
            Username: <input type="text" name="username" /><br><br>
            Password: <input type="password" name="password" /><br><br>
            <input type="submit" value="Login" />
        </form>
    `);
});

// Login logic
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        req.session.user = username;
        res.redirect('/home');
    } else {
        res.send('Invalid username or password');
    }
});

// Protected route
app.get('/home', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}, Authentication Successful`);
    } else {
        res.redirect('/');
    }
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

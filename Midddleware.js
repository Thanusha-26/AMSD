const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware
const loggerMiddleware = (req, res, next) => {
    console.log('Middleware Executed');
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next(); // Transfer control to route handler
};

// Use middleware
app.use(loggerMiddleware);

// Route
app.get('/', (req, res) => {
    res.send('Middleware example working');
});

// Another route
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {
    res.render('index', {
        name: 'ExpressJS',
        message: 'Welcome to Templating Engine Example'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/form.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.send(`
        <h2>Form Submitted Successfully</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

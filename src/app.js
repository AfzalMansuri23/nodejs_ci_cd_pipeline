const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Node.js App!' });
});

app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send({ message: `Hello, ${name}!` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

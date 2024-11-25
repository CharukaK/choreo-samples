const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Insecure: Execute arbitrary code from user input
app.post('/execute', (req, res) => {
    const code = req.body.code;
    try {
        // Dangerous: Using eval() to execute user-provided code
        const result = eval(code);
        res.send(`Result: ${result}`);
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome! Send POST requests to /execute with a JSON body containing "code".');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

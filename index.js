const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, JS, CSS) from the "public" folder
//app.use(express.static(path.join('index.html')));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});

// Start the Express server on port 3000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
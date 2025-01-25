const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});

app.use(express.static(path.join("."))); // gets other files that are needed from current directory

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
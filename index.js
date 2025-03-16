const express = require('express');
const path = require('path');
const app = express();

//var pathname=url.parse(req.url).pathname;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: '.' });
});

app.get('/howtoplay', (req, res) => {
    res.sendFile('howtoplay.html', { root: '.' });
});

app.use(express.static(path.join("."))); // gets other files that are needed from current directory
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
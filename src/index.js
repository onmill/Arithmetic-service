const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/src/index.html'));
    res.send("Arithmetic service - Hello World");
});

app.get('/add/:n/:m', (req, res) => {
    res.json((Number(req.params.n) + Number(req.params.m)));
});

app.listen(port);
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Arithmetic service - Hello World");
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    res.json(add(n,m));
});

app.get('/subtract/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    res.json(subtract(n,m));});

app.get('/multiply/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    res.json(multiply(n,m));});

app.get('/divide/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    res.json(divide(n,m));});

app.listen(port);
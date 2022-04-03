const express = require('express');
const request = require('request');
const app = express();

var txns = {};

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/json/:hash', (req, res) => {
  const { hash } = req.params;
  txns[hash] = req.body;
  res.json(txns[hash]);
});

app.get('/json/:hash', (req, res) => {
  const { hash } = req.params;
  res.json(txns[hash]);
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

const express = require('express');
const app = express();
require('dotenv/config');

app.get('/', function (req, res) {
  res.send('Servidor Online');
});

app.listen(process.env.PORT, function () {
  console.log('SERVIDOR INICIADO NA PORTA: '+process.env.PORT);
});
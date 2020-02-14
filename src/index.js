const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.send('Servidor Online');
});

app.listen(process.env.PORT, function () {
  console.log('SERVIDOR INICIADO NA PORTA: '+process.env.PORT);
});
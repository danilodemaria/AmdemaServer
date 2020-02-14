const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.send('Vinicius Troll man');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('SERVIDOR INICIADO NA PORTA: '+3000);
});
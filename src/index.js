const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res) {
  res.send('SERVER ONLINE');
});

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/html/login.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('SERVIDOR INICIADO NA PORTA: '+3000);
});
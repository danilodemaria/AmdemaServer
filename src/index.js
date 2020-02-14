const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(express.static(__dirname));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/src/styles/styles.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});


app.get('/', function (req, res) {
  res.send('SERVER ONLINE');
});

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/html/login.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('SERVIDOR INICIADO NA PORTA: '+3000);
});
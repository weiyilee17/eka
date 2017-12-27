var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../client/'));


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
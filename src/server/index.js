let express = require('express');
let axios = require('axios');
let bodyParser = require('body-parser');

let models = require('../DB/models/users.js');
let db = require('../DB/mysql/index.js');

let app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../client/'));

app.post('/form/1', (req, res) => {
  console.log('req.body for post form 1: ', req.body);

  db.addInfoFromForm1(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
  

  /*

  can't figure out postgres and knex

  models.User.forge({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).save()
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      console.log('error forging form1 ', err);
      res.status(503).send(err);
    })
    */

})


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
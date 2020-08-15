const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
const Images = require('../database/Images.js');

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/room_photos', (req, res) => {
  Images.find({})
    .then((data) => {
      res.status(200).send(data);
      console.log('success getting data from images db: ', data);
    })
    .catch((err) => {
      res.status(500);
      console.log('error getting data from images db: ', err);
    });
});




app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
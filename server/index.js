const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = 8080;
const Images = require('../database/Images.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
  res.sendFile('index');
});




app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
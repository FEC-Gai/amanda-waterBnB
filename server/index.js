const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = 8080;
const Images = require('../database/Images.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
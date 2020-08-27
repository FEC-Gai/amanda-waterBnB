const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const fs = require('fs');
const db = require('../database/index.js');
const Images = require('../database/Images.js');
const { getRoomUrls, getHostUrls, getReviewerUrls } = require('../database/helpers/urlsArray.js');

const port = 3001;
const app = express();
const fileUpload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

const roomPhotos = getRoomUrls();
const hostPhotos = getHostUrls();
const reviewerPhotos = getReviewerUrls();
//get credentials and directory path into post reqs

//post room images to cloudinary
//fileUpload.array(file, options, cb)
app.post('/upload', fileUpload.array(roomPhotos), (req, res, next) => {
  let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream((err, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  }
  async function upload(req) {
    let result = await streamUpload(req);
    console.log('stream upload to cloudinary: ', result);
  }
  upload(req);
});

//post host images to cloudinary
app.post('/upload', fileUpload.array(hostPhotos), (req, res, next) => {
  let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream((err, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  }
  async function upload(req) {
    let result = await streamUpload(req);
    console.log('stream upload to cloudinary: ', result);
  }
  upload(req);
});

//post reviewer images to cloudinary
app.post('/upload', fileUpload.array(reviewerPhotos), (req, res, next) => {
  let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream((err, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  }
  async function upload(req) {
    let result = await streamUpload(req);
    console.log('stream upload to cloudinary: ', result);
  }
  upload(req);
});


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

//for testing instead of listen above:
//module.exports = app;
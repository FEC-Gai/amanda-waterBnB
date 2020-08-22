//const fetch = require('node-fetch');
const fs = require('fs');
let Promise = require('bluebird');
//const util = require('util');
const path = require('path');
const axios = require('axios');
//const request = require('request');
const { getUnsplashRooms } = require('./getUnsplash.js');
const writeFilePromise = Promise.promisify(fs.writeFile);

async function downloadRooms() {
  return getUnsplashRooms('living,indoors,room')
    .then((response) => {
      //only getting 30 max
      //console.log('🇲🇰response length: ', response.length);
      let photoUrls = [];
      for (let i = 0; i < response.length; i++) {
        let photoObj = response[i];
        //console.log('🇲🇰photoObj: ', photoObj);
        let photoUrl = photoObj.urls.raw + "&w=1057";
        photoUrls.push(photoUrl);
      }
      //console.log('🏳️‍🌈photoUrls: ', photoUrls);
      return photoUrls;
    })
    .then((photoUrls) => {
      //don't need to save as photos, just save as photo urls
      //let pathArr = [];
      //do mapping func instead of for loop
      let pathArr = photoUrls.map((photoUrl, index) => {
        //room1.txt, etc
        index = '' + index;
        let filePath = path.resolve(__dirname, './upload/roomPhotos', 'room' + `${index}.txt`);
        return writeFilePromise(filePath, photoUrl, 'utf8')
          .catch((err) => {
            console.log('error writing url file: ', err);
          })
      })
      return Promise.all(pathArr)
    })
    .then(() => {
      console.log('🔮everything ran!');
    })
    .catch((err) => {
      console.log('error downloading room photos: ', err);
    })
  };

  downloadRooms()
  .then(() => {
    console.log('downloadRooms complete');
  })

  module.exports.downloadRooms = downloadRooms;
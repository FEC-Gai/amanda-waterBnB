//const fetch = require('node-fetch');
const fs = require('fs');
let Promise = require('bluebird');
//const util = require('util');
const path = require('path');
const axios = require('axios');
//const request = require('request');
const { getUnsplashRooms } = require('./getUnsplash.js');

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
      let filePath;
      let pathArr = [];
      for (let j = 0; j < photoUrls.length; j++) {
        let photoUrl = photoUrls[j];
        filePath = path.resolve(__dirname, './upload/roomPhotos', photoUrl);
        let write = Promise.promisify(fs.writeFile(filePath, 'utf8', callback));
        console.log('⛔️write: ', write);
        pathArr.push(write);
      }
      return Promise.all(pathArr)
      .then((response) => {
        //console.log('🔮response: ', response);
        return new Promise((resolve, reject) => {
          response.data.on('end', () => {
            resolve();
          });
          response.data.on('error', (err) => {
            reject(err);
          });
        })
      })
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


  /*
 (err, data) => {
          if (err) {
            throw err;
          } else {
            console.log('data', data);
          }
        }

filePath = path.resolve(__dirname, './upload/roomPhotos', photoUrl);
response.data.pipe(fs.write(filePath, 'utf-8'));
let nums = [];
      for (let i = 1; i <= 500; i++) {
        nums.push(i);
      }
      //console.log('nums: ', nums);

      let arrOfGetReqs = [];
      //return axios req for each photoUrl in array
      //download each

      const options = {
        //method: 'GET',
        //url: photoUrl,
        responseType: 'stream'
      };

      return axios.all(arrOfGetReqs, options)
      .then((response) => {
        //console.log('🔮Object.keys of response: ', Object.keys(response));
        response.data.pipe(fs.write(filePath));
        return new Promise((resolve, reject) => {
          response.data.on('end', () => {
            resolve();
          });
          response.data.on('error', (err) => {
            reject(err);
          });
        })
      })
    })
  */
//const fetch = require('node-fetch');
const fs = require('fs');
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
      //console.log('〽️photoUrls 2: ', photoUrls);
      let filePath;
      let arrOfGetReqs = [];
      //grab photoUrl for each photoObj
      let nums = [];
      for (let i = 1; i <= 500; i++) {
        nums.push(i);
      }
      //console.log('nums: ', nums);
      for (let i = 0; i <= nums.length; i++) {
        let num = nums[i];
        filePath = path.resolve(__dirname, './upload/roomPhotos', `roomPhoto${num}.jpg`);
        //return axios req for each photoUrl in array
        //download each
        for (let j = 0; j < photoUrls.length; j++) {
          let photoUrl = axios.get(photoUrls[j]);
          arrOfGetReqs.push(photoUrl);
        }
        const options = {
          //method: 'GET',
          //url: photoUrl,
          responseType: 'stream'
        };
        //don't need to save as photos, just save as photo urls
        return axios.all(arrOfGetReqs, options)
        .then((response) => {
          console.log('🔮Object.values of response: ', Object.values(response));
          response.data.pipe(fs.createWriteStream(filePath));
          return new Promise((resolve, reject) => {
            response.data.on('end', () => {
              resolve();
            });
            response.data.on('error', (err) => {
              reject(err);
            });
          })
        })
      }
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
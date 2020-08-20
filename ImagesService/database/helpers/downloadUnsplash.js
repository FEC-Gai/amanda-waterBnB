//const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
//const request = require('request');
const { getUnsplashRooms } = require('./getUnsplash.js');

async function download() {
  return getUnsplashRooms('living,indoors,room')
    .then((response) => {
          let photoUrls = [];
          for (let i = 0; i < response.length; i++) {
            let photoObj = response[i];
            //console.log('🇲🇰photoObj: ', photoObj);
            let photoUrl = photoObj.urls.raw + "&w=1057";
            photoUrls.push(photoUrl);
          }
          console.log('🏳️‍🌈photoUrls: ', photoUrls);
          //grab photoUrl for each photoObj
          return photoUrls;
    })
    .then((photoUrls) => {
      //console.log('🏺photoUrl 2: ', photoUrl);
      //`photo${num}.jpg`
      const filePath = path.resolve(__dirname, './upload', 'photo.jpg');
      //return axios req for each photoUrl in array
      //download each
      const getStream = {
        method: 'GET',
        url: photoUrl,
        responseType: 'stream'
      };
      return axios(getStream)
        .then((response) => {
          //console.log('🔮response: ', response);
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
    })
    .catch((err) => {
      console.log('error downloading photo: ', err);
    })
  };

  download()
  .then(() => {
    console.log('download complete');
  })

  module.exports.download = download;
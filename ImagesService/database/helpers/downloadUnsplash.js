//const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
//const request = require('request');
const { getUnsplashRooms } = require('./getUnsplash.js');

async function download() {
  return getUnsplashRooms('living,indoors,room')
    .then((response) => {
          let photoUrl;
          for (let i = 0; i < response.length; i++) {
            let photoObj = response[i];
            //console.log('🇲🇰photoObj: ', photoObj);
            photoUrl = photoObj.urls.raw + "&w=1057";
          }
          //console.log('🏳️‍🌈photoUrl: ', photoUrl);
          return photoUrl;
    })
    .then((photoUrl) => {
      //console.log('🏺photoUrl 2: ', photoUrl);
      const filePath = path.resolve(__dirname, './upload', 'photo.jpg');
      const getStream = {
        method: 'GET',
        url: photoUrl,
        responseType: 'stream'
      };
      return axios(getStream)
        .then((response) => {
          console.log('🔮response: ', response);
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


//const photoUrl = eachPhoto(getUnsplashRooms);
//photo.urls.raw + "&w=1057"

// response.data.on('end', () => {
//   resolve();
// });
// response.data.on('error', (err) => {
//   reject(err);
// });



// let download = (photo, path, cb) => {
//   rquest.head(photo, (err, res, body) => {
//     request(photo)
//       .pipe(fs.createWriteStream(path))
//       .on('close', cb)
//   })
// };

// const path = '../upload/image.jpg';

// const eachPhoto = (getUnsplashRooms) => {
//   for (let i = 0; i < getUnsplashRooms.length; i++) {
//     let photo = getUnsplashRooms[i];
//   }
//   return photo;
// };

// download(eachPhoto(getUnsplashRooms), path, () => {
//   console.log('downloaded photos to upload folder');
// });
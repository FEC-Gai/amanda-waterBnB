//const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
//const request = require('request');
const { getUnsplashRooms } = require('./getUnsplash.js');

async function download() {
  let imageArr = getUnsplashRooms('living,indoors,room');
  const eachPhoto = (imageArr) => {
    console.log('🇳🇬imageArr: ', imageArr);
    let photoUrl;
    for (let i = 0; i < imageArr.length; i++) {
      let photoObj = imageArr[i];
      console.log('🇲🇰photoObj: ', photoObj);
      photoUrl = photoObj.urls.raw;
    }
    console.log('🏳️‍🌈photoUrl: ', photoUrl);
    return photoUrl;
  };
  const photoUrl = eachPhoto(getUnsplashRooms);
  const filePath = path.resolve(__dirname, './upload', 'photo.jpg');
  const getStream = await axios({
    method: 'GET',
    url: photoUrl,
    responseType: 'stream'
  })

  getStream.data.pipe(fs.createWriteStream(filePath));

  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      resolve();
    });
    response.data.on('error', (err) => {
      reject(err);
    })
  })

};

download()
  .then(() => {
    console.log('download complete');
  })

module.exports.download = download;


//photo.urls.raw + "&w=1057"



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
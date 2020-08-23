const fs = require('fs');
let Promise = require('bluebird');
const path = require('path');
const { getUnsplashRooms, getUnsplashHosts } = require('./getUnsplash.js');
const writeFilePromise = Promise.promisify(fs.writeFile);

async function downloadRooms() {
  return getUnsplashRooms('living,indoors,room')
    .then((response) => {
      //only getting 30 max //getting 3 as test
      //console.log('🇲🇰response length: ', response.length);
      let photoUrls = [];
      for (let i = 0; i < response.length; i++) {
        let photoObj = response[i];
        let photoUrl = photoObj.urls.raw + "&w=1057";
        photoUrls.push(photoUrl);
      }
      return photoUrls;
    })
    .then((photoUrls) => {
      let pathArr = photoUrls.map((photoUrl, index) => {
        index = '' + index;
        let filePath = path.resolve(__dirname, './upload/roomPhotos', `room${index}.txt`);
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

  async function downloadHosts() {
    return getUnsplashHosts('portrait,person')
      .then((response) => {
        //only getting 30 max //getting 3 as test
        //console.log('🇲🇰response length: ', response.length);
        let photoUrls = [];
        for (let i = 0; i < response.length; i++) {
          let photoObj = response[i];
          let photoUrl = photoObj.urls.raw + "&w=1057";
          photoUrls.push(photoUrl);
        }
        return photoUrls;
      })
      .then((photoUrls) => {
        let pathArr = photoUrls.map((photoUrl, index) => {
          index = '' + index;
          let filePath = path.resolve(__dirname, './upload/hostPhotos', `host${index}.txt`);
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
        console.log('error downloading host photos: ', err);
      })
    };

    downloadHosts()
    .then(() => {
      console.log('downloadHosts complete');
    })

    exports.downloadRooms = downloadRooms;
    exports.downloadHosts = downloadHosts;

  //module.exports.downloadRooms = downloadRooms;
const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');

//save photo data in one obj variable - after resolving promise
let photos = {};

const allUrls = async () => {
  let rooms = Promise.resolve(getUnsplashRooms());
  await rooms
    .then((data) => {
      let urls = [];
      for (let i = 0; i < data.length; i++) {
        //console.log('data[i]', data[i]);
        urls.push(data[i].urls.raw + "&w=1057");
      }
      photos.roomPhotos = urls;
    })
    .catch((err) => {
      console.log('error getting rooms urls array: ', err);
    });

    let hosts = Promise.resolve(getUnsplashHosts());
    await hosts
      .then((data) => {
        let urls = [];
        for (let i = 0; i < data.length; i++) {
          //console.log('data[i]', data[i]);
          urls.push(data[i].urls.raw + "&w=204");
        }
        photos.hostPhotos = urls;
      })
      .catch((err) => {
        console.log('error getting hosts urls array: ', err);
      });

    let reviewers = Promise.resolve(getUnsplashReviewers());
    await reviewers
      .then((data) => {
        let urls = [];
        for (let i = 0; i < data.length; i++) {
          //console.log('data[i]', data[i]);
          urls.push(data[i].urls.raw + "&w=204");
        }
        photos.reviewerPhotos = urls;
      })
      .catch((err) => {
        console.log('error getting reviewers urls array: ', err);
      });
};

//generate array of 100 objects for seedingData
const generatePhotos = () => {
  const results = [];
  for (let i = 1; i < 101; i++) {
    ((i) => {
      setTimeout(() => {
        //console.log('i: ', i);
        let photos = {};
        allUrls()
          .then(() => {
            photos.room_id = i;
            photos.room_photos = photos.roomPhotos;
            photos.host_image = photos.hostPhotos;
            photos.reviewers = photos.reviewerPhotos;
            results.push(photos);
          })
          .catch((err) => {
            console.log('error generating photos: ', err);
          });
      })
    })(i);
  }
  return results;
};

//generatePhotos();


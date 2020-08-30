const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
//const faker = require('faker');

//save photo data in one obj variable - after resolving promise
let allPhotos = {};

console.log("Starting up!");

async function roomUrls() {
  return getUnsplashRooms('living,indoors,room')
    .then((response) => {
      let urls = [];
      for (let i = 0; i < response.length; i++) { //response not coming through when run all funcs in this file
        urls.push(response[i].urls.raw + "&w=1057");
      }
      allPhotos.roomPhotos = urls;
      //console.log('💈allPhotos.roomPhotos: ', allPhotos.roomPhotos);
    })
    .catch((err) => {
      console.log('error getting rooms urls array: ', err);
    });
};
roomUrls()
  .then(() => {
    console.log('roomUrls complete');
  })

async function hostUrls() {
  return getUnsplashHosts('person,happy')
    .then((response) => {
      let urls = [];
      for (let i = 0; i < response.length; i++) {
        //console.log('response[i]', response[i]);
        urls.push(response[i].urls.raw + "&w=204");
      }
      allPhotos.hostPhotos = urls;
    })
    .catch((err) => {
      console.log('error getting hosts urls array: ', err);
    });
};
hostUrls()
  .then(() => {
    console.log('hostUrls complete');
  })

async function reviewerUrls() {
  return getUnsplashReviewers('person,cheerful')
    .then((response) => {
      let urls = [];
      for (let i = 0; i < response.length; i++) {
        //console.log('response[i]', response[i]);
        urls.push(response[i].urls.raw + "&w=204");
      }
      allPhotos.reviewerPhotos = urls;
      //console.log('💈allPhotos.reviewerPhotos: ', allPhotos.reviewerPhotos); //populated here
    })
    .catch((err) => {
      console.log('error getting reviewers urls array: ', err);
    });
};
reviewerUrls()
.then(() => {
  console.log('reviewerUrls complete');
})

console.log('allPhotos: ', allPhotos); //not populated yet here
let photos = {};
let results = [];

console.log("Starting setTimeout func!");
//generate array of 100 objects for seedingData
async function generatePhotos() {
  //results = [];
  for (let i = 1; i < 101; i++) {
    ((i) => {
      setTimeout(() => {
        //console.log('i: ', i);
        return roomUrls()
          .then(() => {
            photos.room_id = i;
            photos.room_photos = allPhotos.roomPhotos;
            results.push(photos);
            //return results;
            //console.log('🧬results.length: ', results.length); //results is populated here
          })
          .catch((err) => {
            console.log('error generating room photos: ', err);
          });
        return hostUrls()
          .then(() => {
            photos.host_image = allPhotos.hostPhotos;
            results.push(photos);
            //console.log('🧬results.length: ', results.length);
            //return results;
          })
          // .then((photos) => {
          //   results.push(photos);
          // })
          .catch((err) => {
            console.log('error generating host photos: ', err);
          });
        return reviewerUrls()
        .then(() => {
          photos.reviewers = allPhotos.reviewerPhotos;
          results.push(photos);
        })
        .catch((err) => {
          console.log('error generating host photos: ', err);
        });
      }, 2000)
    })(i);
  }
  //console.log('🎈results.length: ', results.length); //not populated until after await
  Promise.resolve(results)
    .then(() => {
      console.log('🔮results.length: ', results.length); //0
    })
    .catch((err) => {
      console.log('error downloading room photos: ', err);
    })
};

generatePhotos()
  //.then((value) => console.log(value.length))
//console.log('End of script');

exports.generatePhotos = generatePhotos;

// .then((results) => {
          //   //results.push(photos);
          //   //console.log('🧬photos: ', photos);
          //   console.log('🧬results: ', results);
          // })
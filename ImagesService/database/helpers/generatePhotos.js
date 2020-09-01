const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
//const faker = require('faker');

//save photo data in one obj variable - after resolving promise
let allPhotos = {};

async function allUrls() {
  let rooms = Promise.resolve(getUnsplashRooms('living,indoors,room'))
  await rooms
    .then((response) => {
      //console.log('🦠response.length: ', response.length); //works here
      let urls = [];
      for (let i = 0; i < response.length; i++) { //response not coming through when run all funcs in this file
        urls.push(response[i].urls.raw + "&w=1057");
      }
      allPhotos.roomPhotos = urls;
      //console.log('💈allPhotos.roomPhotos: ', allPhotos.roomPhotos); //populated here
    })
    .catch((err) => {
      console.log('error getting rooms urls array: ', err);
    });
// roomUrls()
//   .then(() => {
//     console.log('roomUrls complete');
//   })
  let hosts = Promise.resolve(getUnsplashHosts('person,happy'))
  await hosts
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
// hostUrls()
//   .then(() => {
//     console.log('hostUrls complete');
//   })
  let reviewers = Promise.resolve(getUnsplashReviewers('person,cheerful'))
  await reviewers
    .then((response) => {
      let urls = [];
      for (let i = 0; i < response.length; i++) {
        //console.log('response[i]', response[i]);
        urls.push(response[i].urls.raw + "&w=204");
      }
      allPhotos.reviewerPhotos = urls;
      //console.log('💈allPhotos.reviewerPhotos: ', allPhotos.reviewerPhotos); //populated here
      //console.log('💈allPhotos: ', allPhotos); //allPhotos here
    })
    .catch((err) => {
      console.log('error getting reviewers urls array: ', err);
    });
};
// reviewerUrls()
// .then(() => {
//   console.log('reviewerUrls complete');
// })

//console.log('allPhotos: ', allPhotos); //not populated yet here
//const photos = {};
//const results = [];

console.log("Starting setTimeout func!");
//generate array of 100 objects for seedingData
async function generatePhotos() {
  console.log('allPhotos: ', allPhotos); //empty here
  const results = [];
  for (let i = 1; i < 101; i++) {
    ((i) => {
      setTimeout(() => {
        //console.log('i: ', i);
        let photos = {};
        return allUrls()
          .then(() => {
            photos.room_id = i;
            photos.room_photos = allPhotos.roomPhotos;
            photos.host_image = allPhotos.hostPhotos;
            photos.reviewers = allPhotos.reviewerPhotos;
            results.push(photos);
            //return results;
            //console.log('🧬results.length: ', results.length); //results is populated here
          })
          .catch((err) => {
            console.log('error generating photos: ', err);
          });
        // return hostUrls()
        //   .then(() => {
        //     photos.host_image = allPhotos.hostPhotos;
        //     results.push(photos);
        //     console.log('🧬results.length: ', results.length);
        //     //return results;
        //   })
          // .then((photos) => {
          //   results.push(photos);
          // })
          // .catch((err) => {
          //   console.log('error generating host photos: ', err);
          // });
        // return reviewerUrls()
        // .then(() => {
        //   photos.reviewers = allPhotos.reviewerPhotos;
        //   results.push(photos);
        // })
        // .catch((err) => {
        //   console.log('error generating host photos: ', err);
        // });
      }, 2000)
    })(i);
  }
  //console.log('🎈results.length: ', results.length); //not populated even after await
  //return allPhotosArray = await Promise.resolve(results);
  //return await Promise.resolve(results)
  return await results
    // .then((results) => {
    //   console.log('🔮results.length: ', results.length); //0
    // })
    // .catch((err) => {
    //   console.log('error downloading photos: ', err);
    // })
};

generatePhotos()
  //.then((value) => console.log(value.length)) //never has length, but coming in as empty array
//console.log('End of script');

exports.generatePhotos = generatePhotos;

// .then((results) => {
          //   //results.push(photos);
          //   //console.log('🧬photos: ', photos);
          //   console.log('🧬results: ', results);
          // })
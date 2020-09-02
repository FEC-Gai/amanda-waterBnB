const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
const faker = require('faker');

async function allUrls() {
  let allPhotos = {};
  let roomUrls = [];
  let rooms = await getUnsplashRooms('living,indoors,room')
  //can write synchronously here, because the timing is handled under hood
  for (let i = 0; i < rooms.length; i++) {
    roomUrls.push(rooms[i].urls.raw + "&w=1057");
  }
  allPhotos.roomPhotos = roomUrls;

  let hostUrls = [];
  let hosts = await getUnsplashHosts('person,happy')
  for (let i = 0; i < hosts.length; i++) {
    hostUrls.push(hosts[i].urls.raw + "&w=204");
  }
  allPhotos.hostPhotos = hostUrls;

  let reviewerUrls = [];
  let reviewers = await getUnsplashReviewers('person,cheerful')
  for (let i = 0; i < reviewers.length; i++) {
    reviewerUrls.push(reviewers[i].urls.raw + "&w=204");
  }
  allPhotos.reviewerPhotos = reviewerUrls;
  return allPhotos;
};


//generate array of 100 objects for seedingData
async function generatePhotos() {
  let allRoomsUrls = await allUrls().catch((err) => console.log(err));
  //console.log('allRoomsUrls: ', allRoomsUrls);
  const results = [];
  for (let i = 1; i < 101; i++) {
    let photos = {};
    photos.room_id = i;
    photos.room_photos = allRoomsUrls.roomPhotos;
    photos.host_image = allRoomsUrls.hostPhotos;
    photos.reviewers = allRoomsUrls.reviewerPhotos;
    photos.rating = faker.random.number({'min': 1, 'max': 5});
    photos.review_count = faker.random.number({'min': 1, 'max': 10})
    results.push(photos);
  }
  //console.log('results: ', results); //this is not getting into my db- this looks exactly how I want it to
  return results;
};


// generatePhotos()
//   .then((results) => {
//     console.log('generatePhotos results: ', results); //should not be in array
//   })

exports.generatePhotos = generatePhotos;
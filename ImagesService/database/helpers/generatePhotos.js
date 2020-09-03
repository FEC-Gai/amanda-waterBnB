const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
const faker = require('faker');


async function allUrls() {
  let allPhotos = {};

  let roomQueries = ['living', 'indoors', 'room', 'interior', 'kitchen', 'bathroom', 'home', 'bedroom', 'den'];
  const getRandomRoomPic = () => {
    var index = Math.floor(Math.random() * roomQueries.length);
    return roomQueries[index];
  };
  let randomRoomQuery = getRandomRoomPic();
  let max = faker.random.number({min: 3, max: 12});
  let roomUrls = [];
  let rooms = await getUnsplashRooms(randomRoomQuery, max)
  //can write synchronously here, because the timing is handled under hood
  for (let i = 0; i < rooms.length; i++) {
    roomUrls.push(rooms[i].urls.raw + "&w=1057");
  }
  allPhotos.roomPhotos = roomUrls;

  let hostQueries = ['woman', 'man', 'person', 'happy', 'portrait', 'cheerful', 'hipster', 'human', 'alone', 'couple', 'family', 'people'];
  const getRandomHostPic = () => {
    var index = Math.floor(Math.random() * hostQueries.length);
    return hostQueries[index];
  };
  let randomHostQuery = getRandomHostPic();
  let hostUrls = [];
  let hosts = await getUnsplashHosts(randomHostQuery)
  for (let i = 0; i < hosts.length; i++) {
    hostUrls.push(hosts[i].urls.raw + "&w=204");
  }
  allPhotos.hostPhotos = hostUrls;

  let reviewerQueries = ['excited', 'person', 'happy', 'portrait', 'cheerful', 'hipster', 'couple', 'people', 'human', 'glad'];
  const getRandomReviewerPic = () => {
    var index = Math.floor(Math.random() * reviewerQueries.length);
    return reviewerQueries[index];
  };
  let randomReviewerQuery = getRandomReviewerPic();
  let reviewerUrls = [];
  let reviewers = await getUnsplashReviewers(randomReviewerQuery, max)
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
  return results;
};


// generatePhotos()
//   .then((results) => {
//     console.log('generatePhotos results: ', results);
//   })

exports.generatePhotos = generatePhotos;
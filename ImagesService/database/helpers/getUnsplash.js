const axios = require('axios');
const path = require('path');
const Unsplash = require('unsplash-js').default;
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, './.env') });


let getUnsplashRooms = (query = 'living,indoors,room') => {
  let options = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos/?query=${query}&page=1&per_page=10&orientation=landscape&client_id=${process.env.UNSPLASH_API_KEY}`
  };

  return axios(options)
    .then((response) => {
      //response.data shows total # of results & total pages
      //response.data.results is an array of image objects
      //console.log('🔶response.data.results length', response.data.results.length);
      return response.data.results;
    })
    .catch((err) => {
      console.log('error getting room images from Unsplash: ', err);
    });
};

let getUnsplashHosts = (query = 'person,happy') => {
  let options = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos/?query=${query}&page=1&per_page=1&orientation=landscape&client_id=${process.env.UNSPLASH_API_KEY}`
  };

  return axios(options)
    .then((response) => {
      //response.data shows total # of results & total pages
      //response.data.results is an array of image objects
      //console.log('🔶response.data.results length', response.data.results.length);
      return response.data.results;
    })
    .catch((err) => {
      console.log('error getting host images from Unsplash: ', err);
    });
};

let getUnsplashReviewers = (query = 'person,cheerful') => {
  let options = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos/?query=${query}&page=1&per_page=5&orientation=landscape&client_id=${process.env.UNSPLASH_API_KEY}`
  };

  return axios(options)
    .then((response) => {
      //response.data shows total # of results & total pages
      //response.data.results is an array of image objects
      //console.log('🔶response.data.results length', response.data.results.length);
      return response.data.results;
    })
    .catch((err) => {
      console.log('error getting reviewer images from Unsplash: ', err);
    });
};

exports.getUnsplashRooms = getUnsplashRooms;
exports.getUnsplashHosts = getUnsplashHosts;
exports.getUnsplashReviewers = getUnsplashReviewers;


//portrait,person
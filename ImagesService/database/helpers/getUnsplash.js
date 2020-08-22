const axios = require('axios');
const Unsplash = require('unsplash-js').default;
const dotenv = require('dotenv');
dotenv.config();


let getUnsplashRooms = (query = 'living,indoors,room') => {
  let options = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos/?query=${query}&page=1&per_page=3&orientation=landscape&client_id=${process.env.UNSPLASH_API_KEY}`
  };

  return axios(options)
    .then((response) => {
      //response.data shows total # of results & total pages
      //response.data.results is an array of image objects
      console.log('🔶response.data.results length', response.data.results.length);
      return response.data.results;
    })
    .catch((err) => {
      console.log('error getting room images from Unsplash: ', err);
    });
};

module.exports.getUnsplashRooms = getUnsplashRooms;
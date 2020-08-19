const axios = require('axios');
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const dotenv = require('dotenv'); //problem with this variable- undefined the way it's getting passed //.config({ path: '.../.env' })
dotenv.config();

//process.env.UNSPLASH_API_KEY


let getUnsplashRooms = (query = 'living,indoors,room') => {
  let options = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos/?query=${query}&orientation=landscape&client_id=${process.env.UNSPLASH_API_KEY}`
  };

  return axios(options)
    //.then(toJson)
    .then((response) => {
      //response.data shows total # of results & total pages
      //response.data.results is an array of image objects
      console.log('🔶response.data', response.data.results);
      return response.data.results;
    })
    .catch((err) => {
      console.log('error getting room images from Unsplash: ', err);
    });
};

module.exports.getUnsplashRooms = getUnsplashRooms;

//or response.results?
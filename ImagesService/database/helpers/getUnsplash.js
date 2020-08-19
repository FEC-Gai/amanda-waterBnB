const axios = require('axios');
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const envVar = require('dotenv').config({ path: '.../.env' });


let getUnsplashRooms = (query = 'living,indoors,room') => {
  let options = {
    method: 'GET',
    url: `https://api.unsplash.com/search/photos/?query=${query}&orientation=landscape&client_id=${envVar}`
  };

  return axios(options)
    //.then(toJson)
    .then((response) => {
      console.log('🔶response.data', response.data); //undefined
      return response.data;
    })
    .catch((err) => {
      console.log('error getting room images from Unsplash: ', err);
    });
};

module.exports.getUnsplashRooms = getUnsplashRooms;

//or response.results?
const fetch = require('node-fetch');
const axios = require('axios');
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  accessKey: "{process.env.UNSPLASH_API_KEY}"
});

let getUnsplashRooms = (query = 'living,indoors,room') => {
  return axios.get(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${unsplash}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log('error getting room images from Unsplash: ', err);
    });
};

module.exports = getUnsplashRooms;
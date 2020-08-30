const db = require('./index.js');
const Images = require('./Images.js');
const { generatePhotos } = require('./helpers/generatePhotos');

//100 hosts/rooms worth of data to be provided
const insertseedData = async function() {
  //as promise instead of setTImeout
  let samplePics = generatePhotos();
  setTimeout(() => {
    Images.create(samplePics)
      .then(() => {
        console.log('successfully seeded db!');
      })
      .catch((err) => {
        console.log('error seeding db: ', err);
      });
  }, 2000);
};
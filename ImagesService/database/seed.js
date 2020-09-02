const db = require('./index.js');
const Images = require('./Images');
const { generatePhotos } = require('./helpers/generatePhotos');

//100 hosts/rooms worth of data to be provided
const insertseedPhotos = async function() {
  let samplePics = await generatePhotos();
  //console.log('samplePics: ', samplePics);
  Images.insertMany(samplePics)
    .then(() => {
      console.log('successfully seeded db!');
    })
    .catch((err) => {
      console.log('error seeding db: ', err);
    });
};
insertseedPhotos();


// const insertseedPhotos = async function() {
//   let samplePics = await generatePhotos();
//   //console.log('samplePics: ', samplePics);
//   Images.create({ samplePics })
//     .then(() => {
//       console.log('successfully seeded db!');
//     })
//     .catch((err) => {
//       console.log('error seeding db: ', err);
//     });
// };

// const insertseedPhotos = async function() {
//   let samplePics = await generatePhotos();
//   //console.log('samplePics: ', samplePics);
//   await Images.create({ samplePics })
//     .then(() => {
//       console.log('successfully seeded db!');
//     })
//     .catch((err) => {
//       console.log('error seeding db: ', err);
//     });
// };

// const insertseedPhotos = async function() {
//   let samplePics = await generatePhotos();
//   //console.log('samplePics: ', samplePics);
//   Images.insertMany({ samplePics }, (err) => {
//     if (err) {
//       console.log('error seeding db: ', err)
//     } else {
//       console.log('successfully seeded db!');
//       //db.close();
//     }
//   });
// };

// const insertseedPhotos = async function() {
//   let samplePics = await generatePhotos();
//   //console.log('samplePics: ', samplePics);
//   await Images.insertMany({ samplePics })
//     .then(() => {
//       console.log('successfully seeded db!');
//     })
//     .catch((err) => {
//       console.log('error seeding db: ', err);
//     });
// };
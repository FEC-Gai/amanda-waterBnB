const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
Promise.promisifyAll(fs);

const roomPhotosPath = path.join(__dirname, '/upload/roomPhotos');
const hostPhotosPath = path.join(__dirname, '/upload/hostPhotos');
const reviewerPhotosPath = path.join(__dirname, '/upload/reviewerPhotos');

async function getRoomUrls() {
  return fs.readdirAsync(roomPhotosPath, 'utf8')
    .then((files) => {
      let urls = files.map((file) => {
        return fs.readFileAsync(`${roomPhotosPath}/${file}`, 'utf8')
          .then((url) => {
            return url;
          })
          .catch((err) => {
            console.log('unable to read file: ', err);
          });
      });
      Promise.all(urls)
        .then((urls) => {
          //console.log('urls: ', urls);
          return urls;
        })
        .catch((err) => {
          console.log('unable to resolve promises into an array: ', err);
        });
    })
    .catch((err) => {
      console.log('unable to read directory: ', err);
    });
};

getRoomUrls()
  .then(() => {
    console.log('getRoomUrls complete');
  })

  async function getHostUrls() {
    return fs.readdirAsync(hostPhotosPath, 'utf8')
      .then((files) => {
        let urls = files.map((file) => {
          return fs.readFileAsync(`${hostPhotosPath}/${file}`, 'utf8')
            .then((url) => {
              return url;
            })
            .catch((err) => {
              console.log('unable to read file: ', err);
            });
        });
        Promise.all(urls)
          .then((urls) => {
            //console.log('urls: ', urls);
            return urls;
          })
          .catch((err) => {
            console.log('unable to resolve promises into an array: ', err);
          });
      })
      .catch((err) => {
        console.log('unable to read directory: ', err);
      });
  };

  getHostUrls()
    .then(() => {
      console.log('getHostUrls complete');
    })

    async function getReviewerUrls() {
      return fs.readdirAsync(reviewerPhotosPath, 'utf8')
        .then((files) => {
          let urls = files.map((file) => {
            return fs.readFileAsync(`${reviewerPhotosPath}/${file}`, 'utf8')
              .then((url) => {
                return url;
              })
              .catch((err) => {
                console.log('unable to read file: ', err);
              });
          });
          Promise.all(urls)
            .then((urls) => {
              //console.log('urls: ', urls);
              return urls;
            })
            .catch((err) => {
              console.log('unable to resolve promises into an array: ', err);
            });
        })
        .catch((err) => {
          console.log('unable to read directory: ', err);
        });
    };

    getReviewerUrls()
      .then(() => {
        console.log('getReviewerUrls complete');
      })

  exports.getRoomUrls = getRoomUrls;
  exports.getHostUrls = getHostUrls;
  exports.getReviewerUrls = getReviewerUrls;
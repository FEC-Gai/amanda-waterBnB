const mongoose = require('mongoose');
const db = require('./index.js');

const imagesSchema = new mongoose.Schema({
  room_id: Number,
  room_photos:
  [{
    photo_id: Number,
    url: String
  }],
  host_id: Number,
  host_image_url: String,
  reviewers:
  {
    reviewer_id: Number,
    reviewer_image_url: String
  },
  rating: Number,
  review_count: Number,
  icons: {
    star_url: String,
    heart_url: String,
    share_url: String
  }
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;
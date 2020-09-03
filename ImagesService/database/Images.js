const mongoose = require('mongoose');
const db = require('./index.js');

const imagesSchema = new mongoose.Schema({
  room_id: Number,
  room_photos: Array,
  host_image: Array,
  reviewers: Array,
  rating: Number,
  review_count: Number
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;
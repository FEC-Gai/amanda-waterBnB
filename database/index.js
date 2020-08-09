const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/images'; //db -> images

const db = mongoose.connect(mongoUri);

module.exports = db;
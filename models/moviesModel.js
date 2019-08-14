const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  Comment: String,
  Watched: String
})

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;

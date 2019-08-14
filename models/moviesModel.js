const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  Title: String,
  Year: Number,
  Poster: String
})

const Movies = mongoose.model('Movies', moviesSchema);

module.export(Movies);

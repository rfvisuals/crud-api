const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  original_title: String,
  vote_average: Number,
  overview: String,
  budget:Number
})

const Movies = mongoose.model('Movies', moviesSchema);

module.export(Movies);

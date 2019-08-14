const express= require('express');
const movies = express.Router();

// const Movie = require('../models/moviesModel.js');

// index route
movies.get('/', (req, resp)=>{
    resp.send("we are working")
})


module.exports = movies;
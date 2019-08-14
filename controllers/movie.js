const express= require('express');
const movies = express.Router();
const Movies = require('../models/moviesModel.js');


// index route
movies.get('/', (req, resp)=>{
    Movies.find({}, (error, foundComment)=>{
        resp.json(foundComment)        
    })
})


// post route
movies.post('/', (req, resp)=>{
    Movies.create(req.body, (error, createdComment)=>{
        resp.json(createdComment);
    });
});

// delete route
movies.delete('/:id', (req, resp)=>{
    Movies.findByIdAndRemove(req.params.id, req.body, {new:true}, (error, updatedComment)=>{
        console.log(deletedComment);
        
    });
});

// put route

module.exports = movies;
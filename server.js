const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const movies = require('./controllers/movie.js')

const db = mongoose.connection

const mongoURI = process.env.PORT || port

// mongoose.connect(mongoURI, {useNewUrlParser: true});

app.use(express.json());
app.use('/movies', movies);
app.use(express.static('public'));


app.listen(port, ()=>{
    console.log('listening on port:', port);
});

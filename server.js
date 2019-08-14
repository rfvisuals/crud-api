const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const movies = require('./controllers/movie.js')

const db = mongoose.connection

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log("connected to mongoose");
});

app.use(express.json());
app.use('/movies', movies);
app.use(express.static('public'));


app.listen(port, ()=>{
    console.log('listening on port:', port);
});

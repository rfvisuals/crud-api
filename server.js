const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, resp)=>{
    resp.send('hello')
});


app.listen(port, ()=>{
    console.log('listening on port:', port);
});

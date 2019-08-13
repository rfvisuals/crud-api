const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());



console.log(port, ()=>{
    console.log("Listening on port", port);
})
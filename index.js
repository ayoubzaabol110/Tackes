const express = require('express');
const mongoose = require('mongoose');
const route = require("./router/taskes"); 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', route)
app.listen(232,()=>{
    console.log("server is demmararage")
})
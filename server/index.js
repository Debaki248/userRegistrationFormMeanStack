/*
require('./config/config');
require('./models/db');
var express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const rtsIndex = require('./routes/index.router');
//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/api',rtsIndex);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//start server
app.listen(process.env.port,() => {
    console.log(`server started at port Number  => ${process.env.port}`);
});
app.use((err,req,res,next) => {
    console.log("inside validation")
    if(err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
*/
require('./models/db');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
//middleware
app.use(bodyparser.json());
//cors
app.use(cors());
//server
app.listen(4000,() =>{
    console.log("server created");
});
const routes =  require('./routes/index.router');
app.use('/api',routes);


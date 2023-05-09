const mongoose = require('mongoose');
//console.log("mongoDb Uri = ",process.env.mongodb_uri)
var conn= mongoose.connect('mongodb://localhost:27017/MeanStackDB');
if(conn){
    console.log("Connection Established");
}else{
    console.log("Connection Error");
}
require('./usermodel');
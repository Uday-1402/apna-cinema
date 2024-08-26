var mongodb= require('mongodb');

const mongoose = require('mongoose');
var db;
var error;
var waiting = []; 

var URL = process.env.databaseurl;


mongoose.connect(URL,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }).then(URL,function(err,database){
    error = err;
    db = database;
    waiting.forEach(function(callback) {
      callback(err, database);
    });
    console.log('Connected to MongooseDB'); 
    

}).catch((e)=>{
    console.log(`Error connecting to Mongoose`);
    console.log(e);
});



module.exports=db;




require('dotenv').config();
const express=require('express');
const path= require("path");
const app=express();
const fs= require("fs");
const ejs= require("ejs");
const PORT =process.env.PORT;
const movie_routes = require("./routes/movie_routes")
const bodyparser=require("body-parser");
const Razorpay = require('razorpay');




require("./db/conn");//require mongoose database

//setting path
const templatepath=path.join(__dirname,"/templates/views")
const partialpath=path.join(__dirname,'/templates/partials')

console.log(templatepath)
//EXPRESS specific stuff

app.use('/static',express.static('static'))//serving static files
app.use(express.urlencoded());  

//Setting view engine
app.set('view engine','ejs');
app.set('views',templatepath);//set the views directory

// set routes
app.use("/",movie_routes);



//Start the server
app.listen(PORT,()=>{
  console.log(`This application started succesfully on port ${PORT}`)
}) 


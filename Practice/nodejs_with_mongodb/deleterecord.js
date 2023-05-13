const express = require('express') ;
const dbConnect = require('./mongodb')
const port = process.env.port || 8081 ;
const app = express() ;
let time = new Date();

//GET DATA FROM MONGO DB
  const deleteRecord = async () => {
    let data = await dbConnect ;
    data = await data.deleteOne({
        "title": "Samsung galaxy"
    }) ;
    console.log(data);
  }
  deleteRecord();


app.listen(port) ;
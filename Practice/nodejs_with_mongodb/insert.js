const express = require('express') ;
const dbConnect = require('./mongodb')
const port = process.env.port || 8080 ;
const app = express() ;
let time = new Date();

//GET DATA FROM MONGO DB
  const insertOneData = async () => {
    let db = await dbConnect ;
   const result = await db.insertOne({
    "title": "Samsung galaxy",
    "description": "An Samsung mobile which is the best phone",
    "price": 1250,
    "discountPercentage": 18.96,
    "rating": 8.69,
    "stock": 45,
    "brand": "Samsung",
    "category": "smartphones"
   }) ;

    console.log('====================================');
    console.log(result);
    console.log('====================================');
  }

  //Insert Many
  const insertManyData = async () => {
    let db = await dbConnect ;
   const result = await db.insertMany({
    "title": "Samsung galaxy 1",
    "description": "An Samsung1 mobile which is the best phone",
    "price": 1250,
    "discountPercentage": 18.96,
    "rating": 8.69,
    "stock": 45,
    "brand": "Samsung",
    "category": "smartphones"
   },
   {
    "title": "Samsung galaxy 3",
    "description": "An Samsung3 mobile which is the best phone",
    "price": 1250,
    "discountPercentage": 18.96,
    "rating": 8.69,
    "stock": 45,
    "brand": "Samsung",
    "category": "smartphones"
   },
   {
    "title": "Samsung galaxy 4",
    "description": "An Samsung4 mobile which is the best phone",
    "price": 1250,
    "discountPercentage": 18.96,
    "rating": 8.69,
    "stock": 45,
    "brand": "Samsung",
    "category": "smartphones"
   }) ;

    console.log('====================================');
    console.log(result);
    console.log('====================================');
  }


  
  insertOneData(); //insert single data
  insertManyData();  //insert many data in one nstance


app.listen(port) ;
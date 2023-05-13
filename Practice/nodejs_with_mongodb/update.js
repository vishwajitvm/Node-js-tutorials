const express = require('express') ;
const dbConnect = require('./mongodb')
const port = process.env.port || 8080 ;
const app = express() ;
let time = new Date();

//GET DATA FROM MONGO DB
  const updateData = async () => {
    let data = await dbConnect ;
    let result = await data.updateOne({
        "title": "Samsung galaxy",
    }, {
        $set: {
            "title": "Samsung galaxy phone 1",
            "description": "An Samsung mobile which is the best phone 1",
            "price": 12550,
            "discountPercentage": 17.96,
            "rating": 7.69,
            "stock": 40,
            "brand": "Samsung phone 1",
            "category": "smartphones phone 1"
        }
    }
    )

    console.log('====================================');
    console.log(result);
    console.log('====================================');
  }


  updateData();


app.listen(port) ;
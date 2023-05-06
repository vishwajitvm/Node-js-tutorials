show dbs ;
use vishwajitkart;
show collections ;

/*########### FIND DATA INTO DB################ */
db.items.find() ;
db.items.find({rating: 4.5})   //filter object
db.items.find({rating: {$gte:4.5}})   //GTE = greter than and equal to--- this will find only record greter than or equal to 4.5
db.items.find({rating: {$gt:4.5}})   //GTE = greter than only--- this will find only record greter than 4.5
//AND CONDITIONS
db.items.find({rating: {$gt:4.5} , price: {$gte: 17000} })   //GTE = greter than and equal to--- this will find only record greter than or equal to 4.5 and alse check on price if price is greter than and equa to 17000 than it'll return

db.items.find({rating: {$lt:4.5} , price: {$lte: 17000} })   //GTE = less than and equal to--- this will find only record less than or equal to 4.5 and alse check on price if price is less than and equa to 17000 than it'll return

//OR CONDITIONS
db.items.find({ $or:[{rating: {$lt:4.5} , price: {$lte: 17000} }] })   //GTE = less than and equal to--- this will find only record less than or equal to 4.5 and alse check on price if price is less than and equa to 17000 than it'll return also if any condition matche it'll return object

//FETCH ONLY RATINGS HERE
b.items.find({rating: {$gt:4.5} , rating:1  }) //this will check if rating is gte than 4.5 and also return only rating else will be not be called

/*########### DELETE DATA INTO DB################ */
db.items.deleteOne({rating: 4.5})   //This will delete first one if multiple record get match or single as well
db.items.deleteMany({rating: 4.5})   //This will delete f multiple record get match at time

/*########### INSERT DATA INTO DB################ */
//insert single object
db.items.insertOne({name: 'Samsung' ,price: 22000,rating: 4.5,qty: 233 ,sold: 98}) 

//insert multiple data
db.items.insertMany([{name: 'Redmi' ,price: 17500,rating: 4.0,qty: 23 ,sold: 98},{name: 'Nokia' ,price: 24000,rating: 4.5,qty: 560 ,sold: 874 },{name: 'One Plus' ,price: 29000,rating: 5.0,qty: 760 ,sold: 874},{name: 'Micrsoft' ,price: 9000,rating: 3.8,qty: 80 ,sold: 4}]) 

/*########### UPDATE DATA INTO DB################ */
db.items.updateOne({name: "Redmi"} , {$set: {price: 1000} }) //update one record here
db.items.updateMany({name: "Redmi"} , {$set: {price: 1000 , rating: 1} })  //update many here


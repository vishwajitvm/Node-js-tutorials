const express = require('express')
const fs = require('fs') ;
const path = require('path')
const app = express() ;
const port = 80 ;

//EXPRESS SPECIFIC CONMFIG
app.use('/static', express.static('static')) //for serving static file
app.use(express.urlencoded()) ;

//PUB SPECIFIC CONFIG
app.set('view engine', 'pug')
app.set('views' , path.join(__dirname , 'views')) ;


//ENDPOINTS
app.get('/' , (req, res) => {
    const message = "Vishwajit vm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae ut animi?" ;
    const param = {"title" : "Vishwajit vm website" , "message" : message}
    res.status(200).render("index.pug" , param)
})

app.post('/' , (req, res) => {
    var formdata = req.body ;
    var movietitle = formdata.movietitle ;
    var year = formdata.year ;
    var imdb = formdata.imdb ;

    var outPutToWrite = `The name of movie is ${movietitle} and it was relesed in year ${year} , with overall raiting of ${movietitle} is around ${imdb}!!Hurry go watch`
    fs.writeFileSync(`${movietitle}_${year}_review.txt` , outPutToWrite) ;
    const param = {"title" : "YOur message save successfully" }
    res.status(200).render("index.pug" , param)
})


app.get('/demo', (req, res) => {res.status(200).render('demo', { title: 'Hey vishwajit', message: 'Hello there!!!demo' })})
app.get('/about' , (req, res) => {res.send("About Page with get")})
app.post('/about' , (req, res) => {res.send("About Page with post")})

//START THE SERVER
app.listen(port , () => {
    console.log('====================================');
    console.log(`The application Started Successfully on ${port}`);
    console.log('====================================');
})
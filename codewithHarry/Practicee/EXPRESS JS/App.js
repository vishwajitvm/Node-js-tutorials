const express = require('express')
const path = require('path')
const app = express() ;
const port = 80 ;

//EXPRESS SPECIFIC CONMFIG
app.use('/static', express.static('static'))

//PUB SPECIFIC CONFIG
app.set('view engine', 'pug')
app.set('views' , path.join(__dirname , 'views')) ;


//ENDPOINTS
app.get('/' , (req, res) => {
    const message = "Vishwajit vm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit molestiae ut animi?" ;
    const param = {"title" : "Vishwajit vm website" , "message" : message}
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
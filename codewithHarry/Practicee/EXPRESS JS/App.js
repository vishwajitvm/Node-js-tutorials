const express = require('express')
const path = require('path')
const app = express() ;
const port = 80 ;

app.use('/static', express.static('static'))

//set the templete engine for pug
app.set('view engine', 'pug')

//set the iew directory
app.set('views' , path.join(__dirname , 'views')) ;

//our pug end poit
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey vishwajit', message: 'Hello there!!!demo' })
  })

app.get('/' , (req, res) => {
    // res.send("First app with vishwajit vm")
    res.status(200).send("First app with vishwajit vm")
})

app.get('/about' , (req, res) => {
    res.send("About Page with get")
})

app.post('/about' , (req, res) => {
    res.send("About Page with post")
})



app.listen(port , () => {
    console.log('====================================');
    console.log(`The application Started Successfully on ${port}`);
    console.log('====================================');
})
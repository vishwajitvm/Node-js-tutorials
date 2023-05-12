const express = require('express') ;
const app = express() ;
const reqFilter = require('./middelware')
// app.use(reqFilter) ;

//Routes
app.get('/' ,reqFilter , (req, res) => {
    res.send("Home page")
})

app.get('/users' , reqFilter , (req, res) => {
    res.send("Users page")
})

app.get('/about' , (req, res) => {
    res.send("About page")
})



app.listen(5000) ;
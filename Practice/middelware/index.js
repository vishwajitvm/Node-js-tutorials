const express = require('express') ;
const app = express() ;
//Middelware
const reqFilter = (req, res , next) => {
    if(!req.query.age) {
        res.send("<h1>Provde your age</h1>")
    }
    else if(req.query.age <= 18) {
        res.send("<h1>Age must be above 18</h1>")
    }
    else {
        next() ;
    }
} 

app.use(reqFilter) ;

//Routes
app.get('/' , (req, res) => {
    res.send("Home page")
})

app.get('/about' , (req, res) => {
    res.send("About page")
})


app.listen(5000) ;
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
    res.status(200).render("home.pug" , param)
})

app.post('/' , (req, res) => {
    var formdata = req.body ;
    var name = formdata.name ;
    var email = formdata.email ;
    var message = formdata.message ;

    var outPutToWrite = `Sophia Williams, a successful entrepreneur and venture capitalist, was going through her emails when she stumbled upon a message from a young entrepreneur named  ${name}. In the message, ${name} introduced himself/herself and asked for Sophia's opinion on his/her latest project. Sophia was impressed by  ${name}'s proactive approach and responded promptly. She offered her feedback, and they began exchanging emails about the project.

    As they continued to communicate, Sophia realized the potential in  ${name}'s project and decided to invest in it. She asked  ${name} to send her more details, and  ${name} replied with a comprehensive message that outlined his/her vision, goals, and strategies. Impressed by  ${name}'s clarity and dedication, Sophia decided to work closely with  ${name} to bring the project to life.
    
    Over the next few months, Sophia and  ${name} exchanged numerous emails, discussing the project's progress, challenges, and opportunities. They used the  ${message} section to share their thoughts, ideas, and suggestions. The  ${email} section allowed them to stay connected and communicate quickly, despite their busy schedules.
    
    Thanks to their collaboration and hard work, the project was a huge success, and Sophia and  ${name} formed a long-lasting partnership. It all started with a simple message, and it led to a life-changing opportunity for both of them.`
    fs.writeFileSync(`${name}_review.txt` , outPutToWrite) ;
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
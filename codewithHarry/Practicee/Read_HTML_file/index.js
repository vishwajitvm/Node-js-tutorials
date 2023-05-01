const http = require('http') ;
const fs = require('fs') ;
const fileContent = fs.readFileSync('index.html') ;

//creating server
const server = http.createServer((req , res) => {
    res.writeHead(200 , {'content-type' : 'text/html'})
    res.end(fileContent) ;
})

//server listing on port
server.listen(8080 , '127.0.0.1' , () => {
    console.log("Listening to port 127.0.0.1:8080");
})

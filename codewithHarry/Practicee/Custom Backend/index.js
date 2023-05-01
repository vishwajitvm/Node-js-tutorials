const http = require('http');
const fs = require('fs') ;
const home = fs.readFileSync('./pages/index.html') ;
const about = fs.readFileSync('./pages/about.html') ;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
    url = req.url ;
    res.statusCode = 200;
    res.writeHead(200 , {'content-type' : 'text/html'})
    if(url == '/') {
      res.end(home) ;
    }
    else if(url == '/about') {
      res.end(about) ;
    }
    else{
      res.statusCode = 404
      res.end("<h1> Page not Found</h1>") ;
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
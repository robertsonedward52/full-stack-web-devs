// Node http module 
let http = require('http');

let myNodeApp = http.createServer(function(req, res) {

    // use the request
    //console.log(req.url)

   if(req.url == '/') {
    res.end('Hey!... Welcome to my home page');
   }

   if(req.url == '/about-us') {
       res.end('<h1> Thanks for have interesting in our website. </h1>')
   }

   res.end("The requested URL was not found.");
})

//The server.listen() method creates a listener on the specified port or path.

myNodeApp.listen(3000);
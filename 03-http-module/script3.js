const http = require("http");
const port = 3000;
const path =require("path")


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.end("Contact Page");
  }
  else if (req.url === "/api") {
      //Server JSON Api
      const user ={name:"vipul",age:24}
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(user))
  }
   
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
    }
       
});

server.listen(port, () => {
  console.log(`server is running at ${3000}`);
});



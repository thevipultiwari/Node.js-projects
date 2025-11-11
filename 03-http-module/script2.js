// Serve HTML files (not just text)
// fs + http

const fs = require("fs");
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("server error");
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("server error");
      } else {
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
      res.statusCode = 404;
      res.setHeader("Content-Type","text/html")
    res.end("<h1>Page Not Found</h1>");
  }
});
server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

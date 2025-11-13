const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = 3000;

//Built in middleware
// (Parses JSON  request body)
// app.use(express.json());
// //Parse form data
// app.use(express.urlencoded({ extended: true }));
// //Serve static files
// app.use(express.static("public")); // "public" is the name of the folder that holds those static files.
// // cors
// app.use(cors()); // enable cross origin request
// //morgan
// app.use(morgan("dev")); //logs request in console

//Custom Middleware
app.use((req, res, next) => {
  const currentTime = new Date();
  console.log(
    `Request method: ${req.method} , request url: ${req.url} and currentime :${currentTime}`
  );
  next();
});

const checkauth = (req, res, next) => {
  const { apikey } = req.query;
  if (apikey === "1234") {
    console.log("access granted");
    next();
  } else {
    res.status(401).json({ message:"unauthorised access"});
    console.log("not granted");
  }
};

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/public", (req, res) => {
  res.send("This is a public route anybody can acceess");
});
app.get("/access", checkauth, (req, res) => {
  res.json({ message: "Access granted to protected route" });
});

// 404 middleware
app.use((req, res) => {
  res.status(404).json({ message:"404 -Not Found" });
});

//Global error middleware
app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(500).json({ success:"false", error:err.message});
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});

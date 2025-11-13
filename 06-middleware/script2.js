const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const port = 3000;

const app = express();

// custom middleware
app.use((req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`${req.url} | ${req.method} | ${currentTime}`);
  next();
});

// middleware for auth
const checkauth = (req, res, next) => {
  const { apikey } = req.query;
  if (apikey === "12345") {
      console.log("access granted");
      res.json({message:"Access granted"})
  } else {
    res.status(400).json({ message: "unathorised access" });
    console.log("unauthorised access");
  }
  
};

// home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// public route
app.get("/public", (req, res) => {
  res.send("Public route authourised to everyone");
});

//private route
app.get("/private", checkauth, (req, res) => {
  res.json({ message: "access grated to protect route" });
});

// 404 middleware
app.use((req, res) => {
  res.status(404).json({ message: "404 -Not Found" });
});

// Global error middleware
app.use((err, req, res, next) => {
  console.log(`Error: ${err.message}`);
  res.status(500).json({ success: "false", error: err.message });
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
    
})

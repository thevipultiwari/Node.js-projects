const express = require("express");
const port = 3000;

const app = express();

// logger --middleware
app.use((req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`${req.method},${req.url},${currentTime}`);
  next();
});

//home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

//profile route
app.get("/profile", (req, res, next) => {
  return next(new Error("Something went wrong"));
});

// global error handler
app.use((err, req, res, next) => {
  console.log(`Error: ${err.message}`);
  //console.error(err.stack);

  // res.status(500).send("Something broke")
  res.status(500).json({ success: "false", error: err.message });
});

// server running at port 3000
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

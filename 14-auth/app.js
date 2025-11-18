const cookieParser = require("cookie-parser");
const express = require("express");
const port = 3000;

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "vipul");
  res.send("done");
});

app.get("/read", (req, res) => {
 console.log(req.cookies)
  res.send("read page");
});

app.listen(port, (req, res) => {
  console.log(`app is running at ${port}`);
});

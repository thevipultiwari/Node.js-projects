const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))
app.set("view engine", "ejs");

// render index.html using view engine
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port)
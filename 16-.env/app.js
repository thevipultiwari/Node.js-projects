const express = require("express");
require("dotenv").config();

const app = express();

// Use env variable or fallback to 3000


app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port ${process.env.PORT}`);
});


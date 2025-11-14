const express = require("express");
const port = 3000;

const app = express();

app.get("/home/:username", (req, res) => {
    res.send(`Welcome, ${req.params.username}`)
  console.log(`Welcome, ${req.params.username}`);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

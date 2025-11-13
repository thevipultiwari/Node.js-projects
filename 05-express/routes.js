//routing
//** req handler is a middleware */
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/profile", (req, res) => {
  res.send("I am the greatest engineer of time");
});

app.get("/api", (req, res) => {
    const user = {
        name: "Vipul Tiwari",
        age: 24,
        favPlayer :"King Kohli"
    }
    res.json(user)
})

app.use((req, res) => {
  res.status(404).send("Not found");
});



app.listen(port, () => {
  console.log(`server is running at ${3000}`);
});

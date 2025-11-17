const express = require("express");
const path = require("path");
const userModel = require("./models/user");
const port = 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

// create user
app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image
  });
  res.redirect("/read");
});

// read user
app.get("/read", async (req, res) => {
  const users = await userModel.find();
  console.log(users.map((u) => u.image));
  res.render("read", { users });
});

// delete user
app.get("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(port, () => {
  console.log(`server is running at ${3000}`);
});

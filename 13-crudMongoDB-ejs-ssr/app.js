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
    image,
  });
  res.redirect("/read");
});

// read user
app.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.render("read", { users });
});

// edit page
app.get("/edit/:userid", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.userid });
  res.render("edit", { user });
});

//update user
app.post("/update/:userid", async (req, res) => {
  let { name, image, email } = req.body;
  let user = await userModel.findOneAndUpdate(
    { _id: req.params.userid },
    { name, email, image },
    { new: true }
  );
  res.redirect("/read");
});

// delete user
app.get("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

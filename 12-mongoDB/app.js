const express = require("express");
const userModel = require("./usermodel");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// create user
app.get("/create", async (req, res) => {
  let users = await userModel.create({
    name: "Aman Tiwari",
    email: "aman@gmail.com",
    age: 20,
  });
  res.send(users);
});

// read user
app.get("/read", async (req, res) => {
  let readUser = await userModel.find();
  res.send(readUser);
});

// update user
app.get("/update", async (req, res) => {
  console.log("Update route hit!");
  let updateUser = await userModel.findByIdAndUpdate(
    "6918dd8cafb0b9147ea19565",
    {
      name: "Harsh Sharma",
      username: "Harsh",
    },
    { new: true }
  );
  res.send(updateUser);
});

// delete user
app.get("/delete", async (req, res) => {
  let deleteUser = await userModel.findOneAndDelete({ name: "Aman Tiwari" });
  res.send(deleteUser);
});

app.listen(port, () => {
  console.log(`server is running at ${3000}`);
});

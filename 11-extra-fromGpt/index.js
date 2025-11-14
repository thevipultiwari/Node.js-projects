const express = require("express");
const morgan = require("morgan");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// In memory-database
let users = [
  {
    id: 1,
    name: "Vipul Tiwari",
    age: 24,
    email: "vipul@example.com",
  },
];
//Helper to generate next id
const getNextId = () => (users.length ? users[users.id - 1].id : 1);

//Routes
app.get("/api/users", (req, res) => {
  res.json({ success: true, data: users });
});

// Get Single User
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user)
    return res.status(404).json({ success: false, message: "User Not Found" });
  res.json({ success: true, data: user });
});

// Post Create a new User
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  //Basic Validation
  if (!name || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Name and email are required" }); //400-Bad request
  }
  const exists = users.find((u) => u.email === email);
  if (exists) {
    return res
      .status(409)
      .json({ succes: false, message: "Email already exists" }); // 409-Conflict
  }
});

//Post echo -demonstrates receiving JSON body
app.post("/api/echo", (req, res) => {
  res.json({ success: true, received: req.body });
});

// Put -update user
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1)
    return res.status(404).json({ success: false, message: "User Not Found" });

  const { name, email } = req.body;
  if (!name && !email)
    return res
      .status(404)
      .json({ success: false, message: "Nothing to update" });

  // simple update
  if (name) users[index].name = name;
  if (email) users[index].email = email;

  res.json({ success: true, data: users[index] });
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1)
    return res.status(404).json({ success: false, message: "User not Found" });

  const removed = users.splice(index, 1)[0];
  res.json({ success: true, data: removed });
});

//404 -error
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// global error handler
app.use((err, req, res, next) => {
  console.log(`Error: ${err.message}`);
  res
    .status(500)
    .json({ success: false, message: `${err.message} || server error` });
});

// server runnning at port 3000
app.listen(port, () => {
  console.log(`Server running at port ${3000}`);
});

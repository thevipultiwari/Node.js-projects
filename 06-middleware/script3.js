const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// -------------------------------------------
// 🔹 Custom Middleware #1 — Logger
// -------------------------------------------
const logger = (req, res, next) => {
  console.log(`📘 ${req.method} ${req.url}`);
  next(); // continue to next middleware
};

// -------------------------------------------
// 🔹 Custom Middleware #2 — Auth (simulated)
// -------------------------------------------
const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === "Bearer vipul123") {
    // Simulating decoded user info
    req.user = { name: "Vipul", role: "admin" };
    console.log("✅ User Authenticated");
    next();
  } else {
    res.status(401).json({ message: "❌ Unauthorized - No or Invalid Token" });
  }
};

// -------------------------------------------
// 🔹 Custom Middleware #3 — Check Admin Role
// -------------------------------------------
const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    console.log("👑 Admin Access Granted");
    next();
  } else {
    res.status(403).json({ message: "🚫 Forbidden - Admins Only" });
  }
};

// -------------------------------------------
// 🔹 Routes
// -------------------------------------------

// Public Route (no middleware)
app.get("/", (req, res) => {
  res.send("🏠 Welcome to Multi-Middleware Example!");
});

// Private Route (auth required)
app.get("/profile", logger, checkAuth, (req, res) => {
  res.json({ message: `Hello ${req.user.name}, welcome back!` });
});

// Admin Route (auth + admin check)
app.get("/admin", logger, checkAuth, checkAdmin, (req, res) => {
  res.json({ message: "✅ Admin Dashboard Access Granted" });
});

// 404 Handler
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

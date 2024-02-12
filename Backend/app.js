const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cvRoutes = require("./routes/cvRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

const userController = require("./controllers/userController");

const authorizedUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    if (decoded) {
      next();
    } else {
      res.status(403).json({ error: "Forbidden" });
    }
  } catch (error) {
    res.status(403).json({ error: "Forbidden" });
  }
};

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions)); 
app.use(cookieParser());
app.use(express.json());

app.post("/", userController.addUser);
app.post("/login", userController.logInUser);
app.get("/find/:username", userController.findUser);
app.patch("/user/:id", userController.patchUser);

// app.use("/", authorizedUser);

app.patch("/user/:id", userController.patchUser);

app.use("/", userRoutes);
app.use("/:id/cv", cvRoutes);

module.exports = app;

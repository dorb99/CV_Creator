const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cvRoutes = require("./routes/cvRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/", userRoutes);
app.use("/:id/cv", cvRoutes);

module.exports = app;

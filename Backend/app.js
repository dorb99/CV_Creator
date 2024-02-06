const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const cvRoutes = require("./routes/cvRoutes");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/", userRoutes);
app.use("/:id/cv", cvRoutes);

module.exports = app;

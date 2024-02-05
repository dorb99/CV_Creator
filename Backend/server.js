const express = require("express");
const app = require('./app')
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./.env"})

mongoose
  .connect(
    process.env.MONGOURL
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(6666, () => {
  console.log("listening on 6666");
});

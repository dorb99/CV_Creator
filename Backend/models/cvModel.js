const mongoose = require("mongoose");


const cvSchema = new mongoose.Schema({
  name: { type: String, required: true },
  template: { type: Number, required: true },
  content: { type: String, required: true },
  userid: { type: String, required: true},
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const CV = mongoose.model("CV", cvSchema);
module.exports = CV
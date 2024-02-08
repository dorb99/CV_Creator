const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  GeneralInfo: { type: mongoose.Schema.Types.Mixed, default: {} },
  EducationalHistory: { type: mongoose.Schema.Types.Mixed, default: {} },
  SkillsAndStrengths: { type: mongoose.Schema.Types.Mixed, default: {} },
  FormerExperience: { type: mongoose.Schema.Types.Mixed, default: {} },
  Template: { type: String, required: true }, 
  userId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now() },
});

const CV = mongoose.model("CV", cvSchema);
module.exports = CV;

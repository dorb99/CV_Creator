const User = require("../models/userModel");
const CV = require("../models/cvModel");

exports.allCV = async (req, res) => {
  try {
    const userCVs = await CV.find({ userId: userId }).exec();
    res.json(userCVs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addCV = async (req, res) => {
  try {
    const createdCV = await CV.create(req.body);
    await User.findByIdAndUpdate(req.body.userid, {
      $push: { cv: createdCV._id },
    });
    res.send(createdCV);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCV = async (req, res) => {
  try {
    const cv = await CV.findById(req.params.cvid).exec();
    res.send(cv);
  } catch (err) {
    res.send(err);
  }
};

exports.patchCV = async (req, res) => {
  try {
    const cv = await CV.findByIdAndUpdate(req.params.cvid, req.body, { new: true }).exec();
    res.send(cv);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteCV = async (req, res) => {
  try {
    await CV.findOneAndDelete(req.params.cvid).exec();
    res.send("CV has been deleted");
  } catch (err) {
    res.send(err);
  }
};

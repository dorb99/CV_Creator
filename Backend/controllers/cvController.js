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
    console.log("hi");
    const userId = req.body.userId;
    const createdCV = await CV.create(req.body);
    const cvid = createdCV._id;
    User.findOneAndUpdate(
      { _id: userId },
      { $push: { cv: cvid } },
      { new: true }
    ).then((result) => {
      console.log("CV added successfully:", result, createdCV);
    });
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
    const cv = await CV.findByIdAndUpdate(req.params.cvid, req.body, {
      new: true,
    }).exec();
    res.send(cv);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteCV = async (req, res) => {
  const id = req.params.cvid;
  try {
    await CV.findOneAndDelete(id).exec();
    res.send("CV has been deleted");
  } catch (err) {
    res.send(err);
  }
};
 
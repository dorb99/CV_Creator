const CV = require("../models/cvModel");
const User = require("../models/userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
    console.log("User created:", newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.patchUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).exec();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.allcv = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).exec();
    const cvIdsAsStrings = user.cv.map(cvId => cvId.toString());
    const userCVs = []
    for (let index = 0; index < cvIdsAsStrings?.length; index++) {
         const cv = await CV.findById(cvIdsAsStrings[index]).exec();
         console.log(cv);
         userCVs.push(cv);
    }
    res.send(userCVs)
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.allUser = async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  };
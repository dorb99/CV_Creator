const CV = require("../models/cvModel");
const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.addUser = async (req, res) => {
  try {
    const userExists = await User.findOne({ username: req.body.username });
    if (userExists) {
      res.status(402).json("username already exists");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      console.log(hashedPassword);
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });
      res.status(201).json({
        status: "success",
        data: {
          user: newUser,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const jwt = require("jsonwebtoken");
const secret = "secretkey";
exports.logInUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        massage: "Inccorect password ",
      });
    } else {
      const token = jwt.sign({ _id: user._id }, secret, {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 60000,
        sameSite: "strict",
      });
      res.status(200).send({
        message: "Logged in successfully",
        user,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred during login",
    });
  }
};
exports.authenticatedRoute = async (req, res) => {
  try {
    console.log(req.cookies.token);
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, secret);
    const userData = await User.findOne({ _id: decoded._id });

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message || "An error occurred." });
  }
};

exports.logoutUser = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "strict",
    });

    res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.patchUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body, password: hashedPassword }
    ).exec();
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
    const cvIdsAsStrings = user.cv.map((cvId) => cvId.toString());
    const userCVs = [];
    for (let index = 0; index < cvIdsAsStrings?.length; index++) {
      const cv = await CV.findById(cvIdsAsStrings[index]).exec();
      console.log(cv);
      userCVs.push(cv);
    }
    res.send(userCVs);
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
exports.findUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

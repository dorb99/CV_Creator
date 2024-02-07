const express = require("express");
const newRoute = express.Router();
const userController = require("../controllers/userController");


newRoute.route("/").get(userController.allUser).post(userController.addUser);
newRoute.route("/:username").get(userController.findUser)
newRoute.route("/login").post(userController.logInUser);
newRoute.route("/logout").get(userController.logoutUser);
newRoute.route("/authenticate").get(userController.authenticatedRoute);
newRoute
  .route("/user/:id")
  .patch(userController.patchUser)
  .delete(userController.deleteUser);

newRoute.route("/user/:id/cv").get(userController.allcv);

module.exports = newRoute;

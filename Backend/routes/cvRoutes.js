const express = require("express");
const newRoute = express.Router();
const cvController = require("../controllers/cvController");

newRoute.route("/").get(cvController.allCV).post(cvController.addCV);
newRoute
  .route("/:cvid")
  .get(cvController.getCV)
  .delete(cvController.deleteCV)
  .patch(cvController.patchCV);

module.exports = newRoute;

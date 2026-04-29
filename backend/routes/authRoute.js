const express = require("express");
const {
  signupController,
  loginController,
  logoutController,
  getUserDetailController,
} = require("../controllers/authController");
const { checkAuth } = require("../middlewares/checkAuth");
const authRoute = express.Router();

authRoute.post("/signup", signupController);
authRoute.post("/login", loginController);

authRoute.post("/logout", checkAuth, logoutController);

authRoute.get("/user-detail", checkAuth, getUserDetailController);

module.exports = authRoute;

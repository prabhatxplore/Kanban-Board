const express = require("express");
const {
  signupController,
  loginController,
  logoutController,
  checkUserSessionController,
} = require("../controllers/authController");
const authRoute = express.Router();

authRoute.post("/signup", signupController);
authRoute.post("/login", loginController);

authRoute.post("/logout", logoutController);

authRoute.post("/check-user-session", checkUserSessionController);

module.exports = authRoute;

const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        field: "email",
        message: "Email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    req.session.user = {
      _id: user._id,
    };

    res.status(201).json({
      success: true,
      message: "Successsfully created user",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    if (req.session.user) {
      {
        return res.status(200).json({
          message: "Already logged in",
        });
      }
    }
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (isMatch) {
      req.session.user = {
        _id: user._id,
      };
      await req.session.save();

      res.status(201).json({
        success: true,
        message: "Successsfully Logged in",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.logoutController = async (req, res) => {
  // logout using sessions
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to logout",
      });
    }
    res.clearCookie("connection-sid");
    res.status(200).json({
      success: true,
      message: "Session deleted successfully",
    });
  });
};

exports.getUserDetailController = async (req, res) => {
  const user = await User.findById(req.session.user._id).select("-password");
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    user: user,
  });
};

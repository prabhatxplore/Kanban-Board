exports.checkAuth = (req, res, next) => {
  if (req.session.user._id) {
    console.log("User is true");
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Please login first",
    });
  }
};

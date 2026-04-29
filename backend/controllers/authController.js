const User = require("../models/User");

exports.signupController = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
};

exports.loginController = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = User.findOne({ email, password: hashedPassword });
};

exports.logoutController = async (req,res) =>{
  // logout using sessions
}

exports.checkUserSessionController = async(req,res)=>{
  // check user sessions
}
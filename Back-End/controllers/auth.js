// 3rd Party Package Imports
const bcrypt = require("bcrypt");

// Model Imports
const User = require("../models/User");

// Utility Imports
const CustomResponse = require("../utils/Response");
const asyncWrapper = require("../utils/asyncWrapper");
const { signAccessToken } = require("../utils/signToken");

exports.signUpUser = asyncWrapper(async (req, res, next) => {
  const { name, email, mobile, password, petParent, petSitter,country,city,address,DOB,state } = req.body;
  const roles = [];
  roles.push("buyer");
  if (petParent) roles.push("petParent");
  if (petSitter) roles.push("petSitter");
  const hashedPassword = await bcrypt.hash(password, 2);
  const user = await User.create({
    name,
    email,
    mobile,
    roles,
    password: hashedPassword,
    country,city,address,DOB,state
  });
  user.password="*****"
  const response = new CustomResponse(true, user, null, "Sign Up Successful!");
  res.status(200).json(response);
});

exports.logInUser = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User Does Not Exists!");
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) throw new Error("Invalid Password!");

  const accessToken = await signAccessToken(user.id);
  const responseUser = await User.findOne({ email }).select([
    "-password",
  ]);

  req.user = responseUser;
  res.json({ accessToken, responseUser });
});

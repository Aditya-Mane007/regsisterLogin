const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({
    message: "Register User",
  });
});
const loginUser = asyncHandler(async (req, res) => {
  res.status(201).json({
    message: "Login User!!",
  });
});
const getUser = asyncHandler(async (req, res) => {
  res.status(201).json({
    message: "Get User",
  });
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
};

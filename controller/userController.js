const { userModel } = require("../model/userModel");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (!username || !email || !password) {
      return res.send({
        sucess: false,
        message: "please provide all the details",
      });
    } else if (existingUser) {
      return res.send({ ucess: false, message: "email has been already used" });
    } else {
      const newUser = new userModel({ username, email, password });
      await newUser.save();
      res.send({ sucess: true, message: "user registered sucessfully" });
    }
  } catch (error) {
    res.send({
      sucess: false,
      message: "registration failed",
      error,
    });
  }
};
module.exports = { registerController };

const express = require("express");
const { registerController } = require("../controller/userController");
const router = express.Router();

//register
router.post("/register", registerController);

module.exports =  {router };

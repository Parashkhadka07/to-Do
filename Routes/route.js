const express = require("express");
const { controller } = require("../controller/test");
const router = express.Router();

//get
router.get("/yo", controller);
//post
router.post("/yo", (req, res) => {
  res.send("hello form routes post mr parash");
});
//delete
router.delete("/yo", (req, res) => {
  res.send("hello from routes delete mr parash");
});
module.exports = router;

const mongoose = require("mongoose");
const colors = require("colors");
//database connection
const connectDb = async () => {
  try {
    const connectt = await mongoose.connect(process.env.mongo);
    console.log(`connected in ${process.env.mongo}`.bgGreen.bold);
  } catch (error) {
    console.log(`mongodb error is ${error}`.bgRed);
  }
};
module.exports = connectDb;

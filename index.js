//importing the required paclages
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const userRoute = require("./Routes/userRoute");

const connectDb = require("./config/database");
const colors = require("colors");

//using that databasefile
connectDb();

//rest objects
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
//route
//for register route
app.use("/api/v1/user", userRoute.router);

//port
const port = process.env.PORT || 8000;

//listen
app.listen(port, () => {
  console.log(`server is running ${port}`.bgGreen.red.bold);
});

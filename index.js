//importing the required paclages
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const userRoute = require("./Routes/route");
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
app.get("/test", (req, res) => {
  res.status(200).send("<h1>hello cooder from khadka server</h1>");
});
//l
app.use("/user", userRoute);
//port
const port = process.env.PORT || 8000;

//listen
app.listen(port, () => {
  console.log(`server is running ${port}`.bgYellow.bold);
});

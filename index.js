//importing the required paclages
const express = require("express");
const morgan = require("morgan");

//rest objects
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
//route
app.post("/test", (req, res) => {
  res.status(200).send("<h1>hello cooder from khadka server</h1>");
});
//port
const port = 8080;

//listen
app.listen(port, () => {
  console.log(`server is running ${port}`);
});

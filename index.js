const express = require("express");
require("dotenv").config();
const taskRouter = require("./src/router/taskRouter"); //Routers
const mongoConnect = require("./src/config/mongoDb");
const app = express();

//Basic middleware
app.use(express.json());

app.get("/healthy", (req, res) => {
  res.json({ status: "Healthy" });
});

/*

Building ApI 

API Resource
*/

app.use("/api/v1/task", taskRouter); //taskResource \

require(mongoConnect); //connection to mongodb

const PORT = process.env.PORT || 2005;
app.listen(PORT, () => {
  console.log("Server is runing at " + PORT);
});

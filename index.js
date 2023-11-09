const express = require("express");
require("dotenv").config();
const taskRouter = require("./src/router/taskRouter"); //Routers
const dbConnect = require("./src/config/mongoDb"); //importing mongodb connectionc
const cors = require("cors");
const app = express();

//Basic middleware
app.use(express.json());
app.use(cors());
app.get("/healthy", (req, res) => {
  res.json({ status: "Healthy" });
});

/*

Building ApI 

API Resource
*/

app.use("/api/v1/task", taskRouter); //taskResource \

const PORT = process.env.PORT || 2005;

dbConnect()
  .then(() => {
    //connection to mongodb
    console.log("DB Connection Success");
    app.listen(PORT, () => {
      console.log("Server is runing at " + PORT);
    });
  })
  .catch((e) => {
    console.log(`Db connection failed ${e}`);
  });

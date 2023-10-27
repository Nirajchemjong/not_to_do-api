const express = require("express");
require("dotenv").config();
const app = express();

//Basic middleware
app.use(express.json());

app.get("/healthy", (req, res) => {
  res.json({ status: "Healthy" });
});

const PORT = process.env.PORT || 2005;
app.listen(PORT, () => {
  console.log("Server is runing at " + PORT);
});

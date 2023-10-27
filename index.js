const express = require("express");

const app = express();

//Basic middleware
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Healthy" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  "Server is ruuning at " + { PORT };
});

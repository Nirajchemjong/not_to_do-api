const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "Success", message: "Get Call" });
});

module.exports = router;

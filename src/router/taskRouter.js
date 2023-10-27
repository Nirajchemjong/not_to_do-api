const { Router } = require("express");

const router = Router();

//GET
router.get("/", (req, res) => {
  res.json({ status: "Success", message: "Get Call" });
});

//Create POST
router.post("/", (req, res) => {
  const { body } = req;

  console.log("body", body);
  res.json({ status: "success", message: "POST Call" });
});

//Created UPDATE
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log("id", id);
  console.log("body", body);
  res.json({ status: "Sucess", message: "PATCH Call" });
});

//DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  res.json({ Status: " success", message: "DELETE Call" });
});

module.exports = router;

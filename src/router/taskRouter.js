const { Router } = require("express");
const taskController = require("../controllers/taskController");

const router = Router();

//GET
router.get("/", taskController.getAllTasks);

//Create POST
router.post("/", taskController.createTasks);

//Created UPDATE
router.patch("/:id", taskController.updateTasks);

//DELETE
router.delete("/:id", taskController.deleteTasks);

module.exports = router;

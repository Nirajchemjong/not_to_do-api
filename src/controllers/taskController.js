/// Controller, all the logic goes in the Controller
const Task = require("../model/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({
      status: "success",
      data: tasks,
    });
  } catch (e) {
    res.status(500).json({
      status: " error",
      message: `Something went wrong - ${e.message}`,
    });
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Task.findByIdAndUpdate(id, body);
    res.json({
      status: "success",
    });
  } catch (e) {
    res.status(500).json({
      status: " error",
      message: `Something went wrong - ${e.message}`,
    });
  }
};

const createTasks = async (req, res) => {
  try {
    const { body } = req;
    const tasks = await Task.create(body);
    res.json({
      status: "success",
      data: tasks,
    });
  } catch (e) {
    res.status(500).json({
      status: " error",
      message: `Something went wrong - ${e.message}`,
    });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;

    Task.findByIdAndDelete(id);
    res.json({
      status: "success",
    });
  } catch (e) {
    res.status(500).json({
      status: " error",
      message: `Something went wrong - ${e.message}`,
    });
  }
};

module.exports = { getAllTasks, createTasks, deleteTasks, updateTasks };

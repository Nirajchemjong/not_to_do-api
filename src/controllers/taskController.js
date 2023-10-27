/// Controller, all the logic goes in the Controller
const Task = require("../model/Task");
const { API_STATUS } = require("../utils/const");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(201).json({
      status: API_STATUS.SUCCESS,
      data: tasks,
    });
  } catch (e) {
    res.status(500).json({
      status: API_STATUS.FAILURE,
      message: `Something went wrong - ${e.message}`,
    });
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Task.findByIdAndUpdate(id, body);
    res.status(201).json({
      status: API_STATUS.SUCCESS,
    });
  } catch (e) {
    res.status(500).json({
      status: API_STATUS.FAILURE,
      message: `Something went wrong - ${e.message}`,
    });
  }
};

const createTasks = async (req, res) => {
  try {
    const { body } = req;
    const tasks = await Task.create(body);
    res.status(201).json({
      status: API_STATUS.SUCCESS,
      data: tasks,
    });
  } catch (e) {
    res.status(500).json({
      status: API_STATUS.FAILURE,
      message: `Something went wrong - ${e.message}`,
    });
  }
};

const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;

    Task.findByIdAndDelete(id);
    res.status(201).json({
      status: API_STATUS.SUCCESS,
    });
  } catch (e) {
    res.status(500).json({
      status: API_STATUS.FAILURE,
      message: `Something went wrong - ${e.message}`,
    });
  }
};

module.exports = { getAllTasks, createTasks, deleteTasks, updateTasks };

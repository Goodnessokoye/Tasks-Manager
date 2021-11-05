const Task = require("../models/tasks");

// Creating Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
};

//Getting all Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort("name");
    res.status(200).send({ tasks });
  } catch (err) {
    res.status(500).send(err);
  }
};

//Getting a single Task
const getTask = async (req, res) => {
  try {
    const task = await Task.findById({ _id: req.params.id });
    if (!task)
      return res.send({
        status: 404,
        message: "Not Found",
      });
    return res.send({
      status: 200,
      message: "Success",
      data: task,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Deleting a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id });
    if (!task)
      return res.send({
        status: 404,
        message: "Not Found",
      });
    return res.send({
      status: 200,
      message: "Deleted",
      data: task,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Updating a task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.send({
        status: 404,
        message: "Not Found",
      });
    }
    return res.json({
      status: 200,
      message: "Updated",
      data: task,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};

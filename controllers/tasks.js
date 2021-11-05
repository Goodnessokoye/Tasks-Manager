const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

// Creating Task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

//Getting all Tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find().sort("name");
  res.status(200).send({ tasks });
});

//Getting a single Task
const getTask = asyncWrapper(async (req, res) => {
  const taskID = req.params.id;
  const task = await Task.findById({ _id: taskID });
  if (!task) return next(createCustomError(`No task with id : ${taskID}`, 404));
  return res.status(200).json({ task });
});

//Deleting a task
const deleteTask = asyncWrapper(async (req, res) => {
  const taskID = req.params.id; 
  const task = await Task.findByIdAndDelete({ id: taskID });
  if (!task) return next(createCustomError(`No task with id : ${taskID}`, 404));
  return res.status(200).json({ task });
});

//Updating a task
const updateTask = asyncWrapper(async (req, res) => {
  const taskID = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  return res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};

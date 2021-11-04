const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/tasks");


router.get("/getAllTasks", getAllTasks);
router.post("/createTask", createTask);
router.get("/getTask/:id", getTask)
router.patch("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;

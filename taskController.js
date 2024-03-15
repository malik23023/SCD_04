// controllers/taskController.js
const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category, priority } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      category,
      priority,
    });
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(taskId, { status }, { new: true });
    res.json({ message: 'Task status updated', task: updatedTask });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



  const updateTaskPriority = async (req, res) => {
    try {
      const { taskId } = req.params;
      const { priority } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(taskId, { priority }, { new: true });
      res.json({ message: 'Task priority updated', task: updatedTask });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const getTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = { createTask, updateTaskStatus,updateTaskPriority, getTasks };


// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  category: { type: String, enum: ['Work', 'Personal', 'Errands'], default: 'Personal' },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

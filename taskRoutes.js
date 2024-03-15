// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.put('/:taskId/status', taskController.updateTaskStatus);
router.put('/:taskId/priority', taskController.updateTaskPriority);
router.get('/', taskController.getTasks);

module.exports = router;

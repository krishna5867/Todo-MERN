const express = require('express')

const {createTodo,deleteTask,editTask,updateTask} = require('../controller/todoController');

const router = express.Router();

router.post('/createTodo/:id', createTodo)
router.delete("/deleteTask/:id/:taskId",deleteTask)
router.delete("/editTask/:id/:taskId",editTask)
router.put("/updateTask/:id/:taskId",updateTask)

module.exports = router




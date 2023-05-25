const STUDENT = require('../model/studentModel')

// Create Task -> POST Method
exports.createTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;

        const student = await STUDENT.findById(id);
        if (student) {
            student.todo.push({ main: task });
            await student.save();
            await student.populate('todo');
            res.send(student)
        }
    } catch (error) {
        console.log(error);
    }
};

// Delete Todo -> DELETE Method
exports.deleteTask = async (req, res) => {
    try {
        const { id, taskId } = req.params;

        const student = await STUDENT.findById(id);
        if (student) {
            student.todo = student.todo.filter((task) => task._id.toString() !== taskId);
            await student.save();
            await student.populate('todo');
            res.send(student);
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Edit Task -> PUT Method
exports.editTask = async (req, res) => {
    try {
        const { id, taskId } = req.params;
        const { task } = req.body;

        const student = await STUDENT.findById(id);
        if (student) {
            const todoItem = student.todo.id(taskId);
            if (todoItem) {
                todoItem.main = task;
                await student.save();
                res.send(todoItem);
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};


// Update Task -> PUT method
exports.updateTask = async (req, res) => {
    try {
        const { id, taskId } = req.params;
        const { task } = req.body;

        const student = await STUDENT.findById(id);
        if (student) {
            const todoItem = student.todo.id(taskId);
            if (todoItem) {
                todoItem.main = task;
                await student.save();
                await student.populate('todo');
                res.send(student);
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } else {
            res.status(404).json({ error: 'Student not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};

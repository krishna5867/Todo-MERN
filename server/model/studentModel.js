const mongoose = require('mongoose');
const Todo = require('../model/todoModel')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require : [true, "Name is Required"],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        // require: [true, "Email is Required"]
    },
    address: {
        type: String,
        require: [true, "Address is Required"]
    },
    studentclass: {
        type: String,
    },
    roll: {
        type: Number
    },
    todo: [{
        main: String,
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)

// student controller 
exports.createTodo = async (req, res)=> {
    const {id} = req.params;
    const {task} = req.body;

    const student = await Student.find(id);
    if(student){
        student.todo.push({main:task})
        await student.save()
        console.log(student);
    }
}

const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    task:{
        type: String,
        require: [true, "Task is required"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema)

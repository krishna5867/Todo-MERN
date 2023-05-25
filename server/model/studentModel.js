const mongoose = require('mongoose');

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


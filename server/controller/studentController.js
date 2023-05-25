const Student = require('../model/studentModel');

// Adding Student -> POST Method
exports.createStudent = async (req, res) => {
    try {
        const { name, email, address, studentclass, roll } = req.body;

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            throw new Error('User already exists');
        }

        const student = new Student({ name, email, address, studentclass, roll });
        await student.save();

        res.status(201).json({
            success: true,
            message: 'Student Added Successfully',
            student
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Failed to add Student',
            error: error.message,
        });
    }
};

// Get All Students List -> Get Method
exports.getStudents = async (req, res) => {
    try {
        const student = await Student.find();
        if (student) {
            res.status(200).json({
                success: true,
                message: 'Students Data Retrieved',
                student,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'No Students found',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Failed to get Students',
            error: error.message,
        });
    }
};

// Get Single Student List -> Get Method
exports.getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (student) {
            res.status(200).json({
                success: true,
                message: "Students Data Retrived",
                student
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Failed to get Student',
            error: error.message,
        });

    }
}

// Search 
exports.searchStudent = async (req, res) => {
    const { query } = req.params;

    try {
        const regex = new RegExp(query, 'i');
        const results = await Student.find({
            $or: [
                { name: regex },
                { email: regex },
                { address: regex },
                { studentclass: regex },
                { todo: { $elemMatch: { main: regex } } }
            ]
        });

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteStudent = async(req,res)=> {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id)
        if(student){
            res.status(200).json({
                success: true,
                message: "User Deleted Successfully",
                student
            })
        }
    } catch (error) {
        console.log(error);
        
    }
}

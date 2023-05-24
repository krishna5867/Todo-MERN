const express = require('express')

const {createStudent,getStudents,getStudent} = require('../controller/studentController');

const router = express.Router();

router.post('/createStudent',createStudent)
router.get('/getStudents',getStudents)
router.get('/getStudent/:id',getStudent)

module.exports = router
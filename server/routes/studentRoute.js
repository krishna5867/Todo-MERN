const express = require('express')

const {createStudent,getStudents,getStudent,searchStudent,deleteStudent} = require('../controller/studentController');

const router = express.Router();

router.post('/createStudent',createStudent)
router.get('/getStudents',getStudents)
router.get('/getStudent/:id',getStudent)
router.get('/searchStudent/:query',searchStudent)
router.delete('/deleteStudent/:id',deleteStudent)

module.exports = router
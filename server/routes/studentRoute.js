const express = require('express')

const {createStudent,getStudents,getStudent,searchStudent} = require('../controller/studentController');

const router = express.Router();

router.post('/createStudent',createStudent)
router.get('/getStudents',getStudents)
router.get('/getStudent/:id',getStudent)
router.get('/searchStudent/:query',searchStudent)

module.exports = router
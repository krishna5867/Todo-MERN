require("dotenv").config();
const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require("cors")
const connectDB = require('./config/db')

const studentRoute = require('./routes/studentRoute')
const todoRoute = require('./routes/todoRoute')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

connectDB()

app.use('/', studentRoute)
app.use('/', todoRoute)


module.exports = app;

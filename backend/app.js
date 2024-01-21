const express = require('express');
const path = require('path');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const vendorRoutes = require('./routes/vendorRoutes')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { error } = require('console');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/assignment',vendorRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database successfully connected...")
})
.catch((error)=>{
    console.log(error)
})

module.exports = app;

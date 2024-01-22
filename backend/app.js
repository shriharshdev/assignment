const express = require('express');
const path = require('path');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')

const vendorRoutes = require('./routes/vendorRoutes')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/bank',vendorRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database successfully connected...")
})
.catch((error)=>{
    console.log(error)
})

module.exports = app;

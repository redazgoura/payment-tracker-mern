const express = require('express');
const dotenv = require('dotenv');// allows us to create global variable
const colors = require('colors');
const morgan = require('morgan');// logger
const connectDB = require('./config/db.js')


dotenv.config({  path: './config/config.env' })

connectDB();

const transactions = require('./routes/transactions')

const app = express();

app.use(express.json()); //allows to use body parser (body parser middleware)

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions)
// in case it can t acces PORT from the env
const PORT = process.env.PORT || 5000

//to lunch the server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));




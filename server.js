const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
//Route file
const bootcamp = require('./routes/bootcamp');
//Load env variables
// dotenv.config({ path: './.env' });
//connect DB
connectDB();
const app = express();

// app.use(logger);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps/', bootcamp);
const PORT = process.env.PORT || 5000;
 const server = app.listen(
   PORT,
   console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
 );

 //handle unhandled promise rejection
 process.on('unhandledRejection', (err, promise) => {
   console.log(`Error : ${err.message}`);
   server.close(() => process.exit(1));
 });

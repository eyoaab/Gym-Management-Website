const dotenv = require('dotenv');
const express = require('express');
const connerDB = require('./configurations/db.config');
const cors = require('cors');

// routes
const userRoute = require('./routes/user.routes');
const classRoute = require('./routes/class.routes');
const testimonyRoute = require('./routes/testimony.routes');
const videoRoute = require('./routes/video.routes');
const blogRoute = require('./routes/blog.routes');

// Initialize app and load environment variables
dotenv.config();
const app = express();

if (!process.env.PORT || !process.env.MONGO_URI) {
    console.error("Error: Missing required environment variables.");
    process.exit(1);
  }
  // connect with database 
  connerDB();
  
  // Middlewares
app.use(express.json()); 
app.use(cors()); 

app.use('/users',userRoute);
app.use('/classes', classRoute);
app.use('/testimonies', testimonyRoute);
app.use('/videos', videoRoute);
app.use('/blogs', blogRoute);


// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  });

module.exports = app;
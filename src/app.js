// src/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const feedbackRoutes = require('./routes/feedback');  // Import feedback routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Cho phép nhận dữ liệu JSON từ client

// Routes
app.use('/api/feedback', feedbackRoutes);  // Định nghĩa route cho feedbacks
app.listen(5001, () => {
    console.log('Server running on http://localhost:5000');
});

module.exports = app;

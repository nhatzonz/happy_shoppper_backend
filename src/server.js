const express = require('express');
const app = express();
const feedbackRoutes = require('./routes/feedback');
const staffRoutes = require('./routes/staffRoute');
const serviceRoutes = require('./routes/serviceRoutes');

// Middleware để đọc dữ liệu từ request body
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Sử dụng các routes
app.use('/api/staff',staffRoutes);  // Lấy thông tin nhân viên
app.use('/api/service',serviceRoutes);  // Lấy thông tin dịch vụ
app.use('/api/feedback',feedbackRoutes); // Tạo feedback

// Chạy server trên cổng 5000
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

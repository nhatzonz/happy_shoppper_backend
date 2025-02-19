// models/staff.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Cập nhật thông tin kết nối của bạn

// Định nghĩa mô hình Staff
const Staff = sequelize.define('staff', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: false,

  },
  staff_code: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'staff',  // Tên bảng trong cơ sở dữ liệu
  timestamps: false,    // Nếu không sử dụng createdAt, updatedAt
});

module.exports= Staff;

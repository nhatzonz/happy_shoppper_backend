// src/models/Feedback.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Feedback = sequelize.define('feedbacks', {
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Services',  
            key: 'id'           
        }
    },
    staff_code: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating_service: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating_space: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    time_submit: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW, 
    }
}, {
    tableName: 'feedbacks', 
    timestamps: false,
});

module.exports = Feedback;

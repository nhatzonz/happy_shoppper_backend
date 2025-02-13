const express = require('express');
const router = express.Router();
const { getAllStaff, addStaff,updatedStaffbyCode,deleteStaffByCode} = require('../controllers/staffController');

router.get('/', getAllStaff);
router.post('/', addStaff);
router.delete('/:staffCode', deleteStaffByCode);
router.put('/:staffCode', updatedStaffbyCode);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllService,addService,updateServiceById,deleteServiceById } = require('../controllers/serviceController');

router.get('/', getAllService);
router.post('/', addService);
router.put('/:id', updateServiceById);
router.delete('/:id', deleteServiceById);

module.exports = router;

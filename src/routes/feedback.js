// src/routes/feedback.js
const express = require('express');
const router = express.Router();
const { getAllFeedbacks, addFeedback, deleteFeedback ,generateQRCode} = require('../controllers/FeedbackController');


router.get('/', getAllFeedbacks);
router.post('/', addFeedback);
router.delete('/:id', deleteFeedback);
const QRCode = require("qrcode");

router.post('/qr', generateQRCode);

module.exports = router;

const { Feedback, Service } = require('../models'); 

const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        res.status(200).json(feedbacks); 
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        res.status(500).json({ message: 'Server error, unable to fetch feedbacks' });
    }
};

const addFeedback = async (req, res) => {
	// console.log(1234);
    const { service_id, staff_code, customer_name, rating_service,rating_space, comment } = req.body;

    try {
        if (!service_id || !customer_name || !rating_service ||!rating_space) {
            return res.status(400).json({ message: 'Service ID, customer name, and rating are required' });
        }

        const service = await Service.findOne({ where: { id: service_id } });

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        const newFeedback = await Feedback.create({
            service_id,
            staff_code,  
            customer_name,
            rating_service,
            rating_space,
            comment
        });

        res.status(201).json({ message: 'Feedback created successfully', feedback: newFeedback });
    } catch (error) {
        console.error('Error adding feedback:', error);
        res.status(500).json({ message: 'Server error, unable to add feedback', error: error.message });
    }
};

const deleteFeedback = async (req, res) => {
    const { id } = req.params;
    try {
        const feedback = await Feedback.findByPk(id);

        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        await feedback.destroy();
        return res.status(200).json({ message: 'Feedback deleted successfully' }); 
    } catch (error) {
        console.error('Error deleting feedback:', error);
        return res.status(500).json({ message: 'Server error, unable to delete feedback', error });
    }
};

const QRCode = require('qrcode');  // Cần cài thư viện qrcode

// Hàm tạo QR Code
const generateQRCode = async (req, res) => {
    try {
        const { staff, staffName, service, serviceName, customer } = req.body;
        
        if (!staff || !staffName || !service || !serviceName || !customer) {
            return res.status(400).json({ message: 'Thông tin nhân viên, dịch vụ và khách hàng là bắt buộc!' });
        }
        const url = `http://ichi.io.vn/?staffCode=${encodeURIComponent(staff)}&staffName=${encodeURIComponent(staffName)}&serviceID=${encodeURIComponent(service)}&serviceName=${encodeURIComponent(serviceName)}&customerName=${encodeURIComponent(customer)}`;

        // Tạo mã QR từ URL
        QRCode.toDataURL(url, (err, qrCodeUrl) => {
            if (err) {
                return res.status(500).json({ message: 'Lỗi khi tạo QR code' });
            }
            res.status(200).json({ qrCodeUrl });
        });
    } catch (error) {
        console.error('Lỗi khi tạo QR code:', error);
        res.status(500).json({ message: 'Lỗi server khi tạo QR code' });
    }
};

module.exports = { getAllFeedbacks, addFeedback, deleteFeedback , generateQRCode};

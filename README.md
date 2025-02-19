# 🛍️ Happy Shopper - Backend API

Happy Shopper Backend là hệ thống xử lý dữ liệu đánh giá dịch vụ, hỗ trợ lưu trữ phản hồi từ khách hàng và quản lý dịch vụ.

## ⚙️ Cài đặt và chạy backend

### 1️⃣ Clone repository về máy
Mở terminal hoặc command prompt và chạy lệnh sau:
```sh
git clone https://github.com/nhatzonz/happy_shopper_backend.git
cd happy_shopper_backend
```

### 2️⃣ Cài đặt dependencies
Đảm bảo bạn đã cài đặt **Node.js** trước khi chạy lệnh sau:
```sh
npm install
```

### 3️⃣ Cấu hình môi trường
Tạo file `.env` trong thư mục gốc và thêm các biến môi trường cần thiết:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=happy_shopper
```

### 4️⃣ Chạy backend
```sh
npm start
```
API sẽ chạy trên `http://localhost:5000/`

---

## 🚀 API Endpoints

### **Nhân viên**
- `GET /api/staff` 
- `POST /api/staff` 

### **Dịch vụ**
- `GET /api/service`
- `POST /api/service`

### **Đánh giá**
- `POST /api/feedback` 
- `GET /api/feedback`

---

## 🛠 Công nghệ sử dụng
- **Node.js & Express.js**: Xử lý API.
- **MySQL & Sequelize**: Lưu trữ và quản lý dữ liệu.
- **QR Code Generator**: Tạo mã QR cho phản hồi.
- **dotenv**: Quản lý biến môi trường.
- **CORS & Body-parser**: Hỗ trợ xử lý dữ liệu request.

---

## 📂 Cấu trúc thư mục
```bash
happy_shopper_backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
├── .env
├── package.json
└── README.md
```

## 📜 Phiên bản
- **Phiên bản hiện tại:** 1.0.0
- **Node.js yêu cầu:** 16.x trở lên

---



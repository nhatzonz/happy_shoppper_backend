const express = require('express');
const app = express();
const feedbackRoutes = require('./routes/feedback');
const staffRoutes = require('./routes/staffRoute');
const serviceRoutes = require('./routes/serviceRoutes');

app.use(express.json());
const cors = require('cors');
app.use(cors());


app.use('/api/staff',staffRoutes);  
app.use('/api/service',serviceRoutes); 
app.use('/api/feedback',feedbackRoutes); 

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

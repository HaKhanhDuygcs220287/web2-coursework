// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const vocabRoutes = require('./routes/vocabRoutes');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000; // ✅ Render sẽ cung cấp PORT env

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection string (bảo mật hơn bằng biến môi trường)
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://mevnuser:12345@mevn-app.8xok7eo.mongodb.net/vocabdb?retryWrites=true&w=majority&appName=MEVN-App';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err.message));

// Routes
app.use('/api/vocab', vocabRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

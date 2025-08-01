// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 3000;

// ✅ Import routes
const vocabRoutes = require('./routes/vocabRoutes');

// ✅ MongoDB URI
const MONGO_URI = 'mongodb+srv://mevnuser:12345@mevn-app.8xok7eo.mongodb.net/vocabdb?retryWrites=true&w=majority&appName=MEVN-App';

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Connect MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err.message));

// ✅ API Routes
app.use('/api/vocab', vocabRoutes);

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('Welcome to MEVN Vocab API');
});

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

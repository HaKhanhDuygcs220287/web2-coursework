const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
  example: { type: String },
  language: { type: String } // 👈 Thêm dòng này
});

module.exports = mongoose.model('Vocab', vocabSchema);

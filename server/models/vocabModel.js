const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
  language: { type: String }
});

module.exports = mongoose.model('Vocab', vocabSchema);
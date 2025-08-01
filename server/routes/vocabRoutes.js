const express = require('express');
const router = express.Router();
const Vocab = require('../models/vocabModel');

// GET all
router.get('/', async (req, res) => {
  const data = await Vocab.find();
  res.json(data);
});

// POST add new
router.post('/', async (req, res) => {
  const vocab = new Vocab(req.body);
  await vocab.save();
  res.json(vocab);
});

// PUT update
router.put('/:id', async (req, res) => {
  const updated = await Vocab.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Vocab.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});


module.exports = router;
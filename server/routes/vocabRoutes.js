// routes/vocabRoutes.js
const express = require('express');
const router = express.Router();
const Vocab = require('../models/vocabModel');

// GET all
router.get('/', async (req, res) => {
  try {
    const data = await Vocab.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET by ID
router.get('/:id', async (req, res) => {
  try {
    const vocab = await Vocab.findById(req.params.id);
    if (!vocab) return res.status(404).json({ error: 'Word not found' });
    res.json(vocab);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const vocab = new Vocab(req.body);
    await vocab.save();
    res.status(201).json(vocab);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save word' });
  }
});

// PUT update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Vocab.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Word not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update word' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Vocab.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Word not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete word' });
  }
});

module.exports = router;

const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

// GET ALL
exports.list_all_words = (req, res) => {
  Vocab.find({}, (err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
};

// GET BY ID
exports.read_a_word = (req, res) => {
  Vocab.findById(req.params.wordId, (err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
};

// POST
exports.create_a_word = (req, res) => {
  const new_word = new Vocab(req.body);
  new_word.save((err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
};

// PUT
exports.update_a_word = (req, res) => {
  Vocab.findOneAndUpdate(
    { _id: req.params.wordId },
    req.body,
    { new: true },
    (err, word) => {
      if (err) res.send(err);
      res.json(word);
    }
  );
};

// DELETE
exports.delete_a_word = (req, res) => {
  Vocab.deleteOne({ _id: req.params.wordId }, err => {
    if (err) res.send(err);
    res.json({ message: 'Word successfully deleted' });
  });
};

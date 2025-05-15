const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  publishedYear: { type: Number, required: true },
  inStock: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);

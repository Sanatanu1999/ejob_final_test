const Book = require('../model/bookModel');

// Create a new book
const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Get a book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Replace a book by ID (PUT)
const replaceBookById = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      overwrite: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: 'Book not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Partially update a book by ID (PATCH)
const updateBookById = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: 'Book not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a book by ID
const deleteBookById = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports={
    getAllBooks,
    getBookById,
    createBook,
    replaceBookById,
    updateBookById,
    deleteBookById

}

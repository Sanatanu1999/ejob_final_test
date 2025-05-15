const express =require('express')
const route=express.Router()
const bookController=require('../controller/bookController')

route.post('/', bookController.createBook);
route.get('/', bookController.getAllBooks);
route.get('/:id', bookController.getBookById);
route.put('/:id', bookController.replaceBookById);
route.patch('/:id', bookController.updateBookById);
route.delete('/:id', bookController.deleteBookById);

module.exports = route;

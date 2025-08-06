const express = require('express');
const { getProduct, addProduct, updateProduct, deleteProduct } = require('../controller/product');
const productimgs = require('../../utils/uploadImgs/productimgs');
const product = express.Router();

product.get('/', getProduct);
product.post('/', productimgs, addProduct);
product.post('/', addProduct);
product.put('/:id', updateProduct)
product.delete('/:id',  deleteProduct)

module.exports = product
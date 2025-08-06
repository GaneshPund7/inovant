const express = require('express');
const { getUser, addUser, updateUser, deleteUser } = require('../controller/user');
const user = express.Router();

user.get('/', getUser);
user.post('/', addUser);
user.put('/:id', updateUser)
user.delete('/:id', deleteUser)

module.exports = user
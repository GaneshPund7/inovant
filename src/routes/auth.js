const express = require('express');
const { login } = require('../../checkAuth/login');

const auth = express.Router();
auth.post('/', login )
module.exports = auth;
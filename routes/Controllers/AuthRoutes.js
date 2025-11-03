const express = require('express');
const {login} = require('../Controllers/AuthController');

const AuthRouter = express.Router();

AuthRouter.post('/login', login);
module.exports = AuthRouter;

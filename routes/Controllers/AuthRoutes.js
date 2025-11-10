const express = require('express');
const { signup, login } = require('C:\Users\Ameen\OneDrive\Desktop\Web techology\routes\Controllers\AuthController.js');
const {login} = require('C:\Users\Ameen\OneDrive\Desktop\Web techology\routes\Controllers\AuthController.js');
const { verifyToken } = require('../middleware/auth');


const AuthRouter = express.Router();

AuthRouter.post('/login', login);
AuthRouter.post('/signup', signup);
AuthRouter.use(verifyToken);

module.exports = AuthRouter;


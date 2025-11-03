const express = require('express');
const{
    createUser,
    retrieveUser,
    retrieveUserById,
    updateUserById,
    deleteUserById,
} = require('../Controllers/TripController');
const UserRouter = express.Router();

UserRouter
.route('/') //api/v1/users
.post(createUser)
.get(retrieveUser);

UserRouter
.route('/:id') //api/v1/trips/:id
.get(retrieveUserById)
.put(updateUserById)
.delete(deleteUserById);

Module.exports = userRouter;
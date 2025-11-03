const express = require('express');
const{
    createUser,
    retrieveUser,
    retrieveUserById,
    updateUserById,
    deleteUserById,
} = require('../Controllers/TripController');
const TripRouter = express.Router();

TripRouter
.route('/') //api/v1/trips
.post(createUser)
.get(retrieveUser);

tripRouter
.route('/:id') //api/v1/trips/:id
.get(retrieveUserById)
.put(updateUserById)
.delete(deleteUserById);

Module.exports = Usertrips;
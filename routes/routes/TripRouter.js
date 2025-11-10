const express = require('express');
const{
    createTrip,
    //retrieveAll,
    getAllTrips,
    //updateTripById,
    //deleteTripById,
} = require('../Controllers/TripController');
const tripRouter = express.Router();

tripRouter.route('/') //api/v1/trips
.post(createTrip) //add new trip
.get(getAllTrips); //get all trips

tripRouter
.route('/:id') //api/v1/trips/:id
.get(retrieveTripById) //get single trip by id
.put(updateTripById)   //update trip by id
.delete(deleteTripById); //delete trip by id

module.exports = tripRouter;
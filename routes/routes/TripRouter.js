const express = require('express');
const{
    createTrip,
    //retrieveAll,
    getAllTrips,
    //updateTripById,
    //deleteTRipById,
} = require('../Controllers/TripController');
const router = express.Router();

router
.route('/') //api/v1/trips
.post(createTrip)
.get(getAllTrips);

/*tripRouter
.route('/:id') //api/v1/trips/:id
.get(retrieveTripById)
.put(updateTripById)
.delete(deleteTRipById);*/

module.exports = router;
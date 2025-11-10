/*const{
    trips,getTripsWithDailyCost
}= require('..models/Trip');*/

//create new trip
const db_access = require('../db.js');      
const db = db_access.db;

const createTrip = (req, res) => {

    const {
        destinationName,
        location,
        language,
        description,
        flightCost = 0,
        accomadationCost = 0,
        mealCost = 0,
        visaCost = 0,
        transportationCost = 0,
        currencyCode = 'N/A',
    }=req.body;

if (!destinationName || !location || !language || !description) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
}
//Parameterized insert query  
const query = `INSERT INTO trips (DESTINATIONNAME, LOCATION,
 CONTINENT, LANGUAGE, DESCRIPTION,
  FLIGHTCOST, ACCOMADATIONCOST, MEALCOST, VISACOST,
   TRANSPORTATIONCOST,
    CURRENCYCODE)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//Data array for parameters
const params = [
    destinationName, location, continent,
    language, description, flightCost, accomadationCost,
    mealCost, visaCost, transportationCost, currencyCode
];

//set cookie to mark new trip creation
res.cookie('TripCreated', 'true', destinationName, {
    maxAge: 15 * 60 * 1000, // 15 min
    httpOnly: true,
});



db.run(
    query,
    params, function (err) {
    if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Database error', error: err.message });
    }
    res.status(201).json({ message: 'Trip created successfully' });
});
};

//Retrieve a single trip by ID
const retrieveTripById = (req, res) => {
    const id = req.params.id;
const query = 'SELECT * FROM trips WHERE ID = ?';

//cookie to track viewed trip
res.cookie('TripViewed', `Trip ID: ${id}`, {
    maxAge: 15 * 60 * 1000, // 15 min
    httpOnly: true,
});

db.get(query, [id], (err, row) => {
    if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error fetching trip' });
    }
if (!row) return res.status(404).json({ message: 'Trip not found' });

return res.status(200).json({
     message: 'Trip retrieved successfully',
      data: row
     }); 
  });
};


//Retrieve all trips
const getAllTrips = (req, res) => {
    db.all('SELECT * FROM trips', [], (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error retrieving trips' });
        }
        res.status(200).json({message: 'Trips retrieved successfully', data: rows });

    });
};
module.exports = {
    createTrip,
    getAllTrips
};



/*const newTrip={
    id:trips.length+1,
     destinationName,
        location,
        language,
        description,
        flightCost,
        accomadationCost,
        mealCost,
        visaCost,
        transportationCost,
        currencyCode,
        dailycost:flightCost+accomadationCost+mealCost+visaCost+transportationCost
};

trips.push(newTrip);
};*/

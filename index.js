const express = require('express');
const app = express();
const TripRouter=require('./routes/TripRouter');

app.use(express.json());
app.use('/api/V1/trip', TripRouter);
app.use('/api/V1/user', require('./routes/UserRouter'));
//if the request starts


Module.exports=
{
    app
}
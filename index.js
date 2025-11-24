const express = require('express');
const app = express();
const TripRouter=require('./routes/TripRouter');

app.use(express.json());
app.use('/api/V1/trip', TripRouter);
app.use('/api/V1/user', require('./routes/UserRouter'));
//if the request starts

//server
app.use(express.static(Path2D.join(__dirname, 'public')));


Module.exports=
{
    app
}
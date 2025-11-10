const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
const tripRouter = require('./routes/TripRouter.js');
const AuthRouter = require('./routes/AuthRoutes.js');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());
app.use('/api/v1/trips', tripRouter);
app.use('/api/v1/auth', AuthRouter);
//app.use('/api/V1/user', require('./routes/UserRouter'));
//if the request starts




module.exports=
{
    app
}
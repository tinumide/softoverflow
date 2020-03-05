const express = require('express');
parentRouter = express.Router();

const welcomeRoute = require('../routes/welcomeroute');
const userRoute = require('../routes/userroutes');
welcomeRoute(parentRouter);
userRoute(parentRouter);

module.exports = parentRouter;


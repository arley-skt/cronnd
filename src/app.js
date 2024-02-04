const express = require('express');
const routes = require('./Routes');


const app = express();
routes(app);

// var cron = require('node-cron');

// cron.schedule('*/2 * * * *', () => {
//   console.log('running a task every two minutes');
// });


 

module.exports = app;
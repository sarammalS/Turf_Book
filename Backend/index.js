// server/index.js
const port = process.env.PORT || 5000; // Set the port to the environment variable or default to 5000
const express = require('express');
const cors = require('cors');

// Import database connection and routes
const connect = require('./connection');
const credadminroute = require('./routes/admincredrouting');
const creduserroute = require('./routes/usercredrouting');
const turfinforoute = require('./routes/turfinforouting');
const turfschroute = require('./routes/turfschedulingrouting');
const userprofileroute = require('./routes/userprofilerouting');
const bookturfroute = require('./routes/bookrouting');
const fetchdtlsroute = require('./routes/fetchturfdtlsrouting');
const userhistoryrouting = require('./routes/userhistoryrouting');

// Initialize Express app
const app = express();

// Connect to the database
connect();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Define API routes
app.use('/adminlogin', credadminroute);
app.use('/userlogin', creduserroute);
app.use('/turfinfo', turfinforoute);
app.use('/turfschedule', turfschroute);
app.use('/userprofile', userprofileroute);
app.use('/bookturf', bookturfroute);
app.use('/turfhistory', fetchdtlsroute);
app.use('/userhistory', userhistoryrouting);

// Optional: Scheduler for turf status updates (if implemented)
const crontask = require('./scheduler/turfstatusupdate');

// Start the server
app.listen(port, () => {
    console.log(`Application running on port ${port}`);
});

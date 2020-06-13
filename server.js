// Dependencies and variables
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


// Setting up Express App
const PORT = process.env.PORT || 9000;
const app = express();

// Sets up morgan to log req
app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// DB Mongo
let MONGODB_URI = process.env.MONGODB_URI ||  "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});
const db = require("./models");

// Creating routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server to begin listening
app.listen(PORT, ()=> {
    console.log("App listening on Port: ", PORT)
});

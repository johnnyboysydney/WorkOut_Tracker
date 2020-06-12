// Dependencies and variables
const express = require("express");
const mongoose = require("mongoose");

const PORT = 9000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on Port ${PORT}');
});

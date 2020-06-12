// Dependencies and variables
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
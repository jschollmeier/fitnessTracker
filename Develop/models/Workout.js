var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: { type: Date},
  exercises: 
  
  [{ 
    
    type: { type: String },
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  
  }]
  
}

);

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

var db = require("../models");
const mongojs = require("mongojs");
module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        
        db.Workout.find({}).then(function(dbWorkouts){
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        });
    });

    app.put("/api/workouts/:id", function(req, res) {
        console.log(req.body);
        //console.log("update")
        db.Workout.updateOne(
            
            { _id: mongojs.ObjectId(req.params.id) }, 
            { exercises: req.body}
        ).then (function(dbWorkout) {
            res.json(dbWorkout);
        });

    });

    app.post("/api/workouts", function(req, res){
        db.Workout.create(
            {day: new Date().setDate(new Date().getDate()-10)},
            {exercises: req.body}
        
        )

    })

    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({})
            .where('day').gt(new Date().getDate()-10).lt(new Date().getDate()-20)
            .then (function(dbWorkout){
                res.json(dbWorkout);
            })
    })
};
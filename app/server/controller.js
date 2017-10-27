module.exports = {
    //WORKOUTS//
    
    getAllWorkouts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.assets.getAllWorkouts(req.user.user_id)
            .then(workouts => {
                res.status(200).send(workouts)})
            .catch(err => res.status(500).send(console.log(err)))
    },

    addWorkout: (req, res) => {
        const dbInstance = req.app.get('db');
        const { workoutDate, workoutDescription, caloriesBurned } = req.body;
        const user_id = req.body.user.user_id;
        dbInstance.workouts.addNewAsset(user_id, workoutDate, workoutDescription, caloriesBurned )
            .then(workouts => res.status(200).send(workouts))
            .catch(err => res.status(500).send(console.log(err)))
    },

    editWorkout: (req, res) => {
        const dbInstance = req.app.get('db');
        const { workoutDate, workoutDescription, caloriesBurned, user } = req.body
        dbInstance.workouts.editAsset( workoutDate, workoutDescription, caloriesBurned, user.user_id)
            .then(workouts => res.status(200).send(workouts))
            .catch(err => res.status(500).send(console.log(err)))
    },

    deleteWorkout: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.workouts.deleteWorkout(req.params.workout_id, req.params.user_id)
            .then(workouts => res.status(200).send(workouts))
            .catch(err => res.status(500).send(console.log(err)))            
    }
}
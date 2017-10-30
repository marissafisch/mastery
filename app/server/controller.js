module.exports = {
    
    //USER//

    getUserById: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.users.getUser(req.params.id)
        .then(user => res.status(200).send(user))
        .catch(err => res.status(500).send())
        console.log('Hello',req.params.id)
    },

    //WORKOUTS//
    
    getAllWorkouts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.workouts.getAllWorkouts()
            .then(workouts => {res.status(200).send(workouts)})
            .catch(err => res.status(500).send(console.log(err)))
    },

    addWorkout: (req, res) => {
        const dbInstance = req.app.get('db');
        const { workoutDate, workoutDescription, caloriesBurned } = req.body;
        dbInstance.workouts.addWorkout(workoutDate, workoutDescription, caloriesBurned )
            .then(workouts => res.status(200).send(workouts))
            .catch(err => res.status(500).send(console.log(err)))
    },

    editWorkout: (req, res) => {
        const dbInstance = req.app.get('db');
        const { workoutDate, workoutDescription, caloriesBurned, workout_id} = req.body
        dbInstance.workouts.editWorkout(workoutDate, workoutDescription, caloriesBurned, workout_id)
            .then(workouts => res.status(200).send(workouts))
            .catch(err => res.status(500).send(console.log(err)))
    },

    deleteWorkout: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.workouts.deleteWorkout(req.params.id)
            .then(workouts => res.status(200).send(workouts))
            .catch(err => res.status(500).send(console.log(err)))            
    }
}
module.exports = {
    
//WORKOUTS//
    
    getAllWorkouts: (req, res, next) => {
        req.app.get('db').getAllWorkouts()
            .then(response => {res.status(200).send(response)})
            .catch(err => res.status(500).send(console.log(err)))
    },

    addWorkout: (req, res, next) => {
        const { workoutDate, workoutDescription, caloriesBurned } = req.body;
        req.app.get('db').addWorkout()
            .then(response => {res.status(200).send(response)})
            .catch(err => res.status(500).send(console.log(err)))
    },

    editWorkout: (req, res, next) => {
        const { workoutDate, workoutDescription, caloriesBurned, workout_id} = req.body
        req.app.get('db').editWorkout(req.params.id)
            .then(response => {res.status(200).send(response)})
            .catch(err => res.status(500).send(console.log(err)))
    },

    deleteWorkout: (req, res, next) => {
        const dbInstance = req.app.get('db');
        req.app.get('db').deleteWorkout(req.params.id)
            .then(response => res.status(200).send(response))
            .catch(err => res.status(500).send(console.log(err)))            
    }
}
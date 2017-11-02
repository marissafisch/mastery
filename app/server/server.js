require('dotenv').config()

const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    session = require('express-session'),
    cors = require('cors');

const controller = require('./controller');

let app = express();
app.use(bodyParser.json());
app.use(cors ());



// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true
// }))

massive(process.env.CONNECTIONSTRING).then(db => {
        app.set('db', db)
})


//WORKOUT ENDPOINTS

app.get('/api/getAllWorkouts', (req, res) => {
    app.get('db').getAllWorkouts().then(workouts => {
        res.status(200).send(workouts);
    })
})

app.patch('/api/editWorkout/:workout_id', (req, res) => {
    const dbInstance = req.app.get('db');
    const {workoutDate, workoutDescription, caloriesBurned} = req.body;
    dbInstance.workouts.editWorkout(workoutDate, workoutDescription, caloriesBurned, req.params.id)
    .then(workouts => {res.status(200).send(workouts)})
    .catch(err => res.status(500).send(console.log(err)))
})


// app.get('/api/getAll', controller.getAllWorkouts)
app.post('/api/add', controller.addWorkout)
// app.patch('/api/edit/:id', controller.editWorkout)
app.delete('/api/delete/:id', controller.deleteWorkout)


let port = 3030;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})
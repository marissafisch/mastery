require('dotenv').config()

const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    session = require('express-session');

const controller = require('./controller');
const app = express()

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})


//ASSET ENDPOINTS
app.get('/api/workouts/get_all/:user_id', controller.getAllWorkouts)
app.post('/api/workouts/add', controller.addWorkout)
app.patch('/api/workouts/edit', controller.editWorkout)
app.delete('/api/workouts/delete/:workout_id/:user_id', controller.deleteWorkout)


let port = 3030;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})
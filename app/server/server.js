require('dotenv').config()

const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    session = require('express-session'),
    cors = require('cors');

const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(cors ());



app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})

//USER ENDPOINT//
app.get('/users/:id', controller.getUserById)


//WORKOUT ENDPOINTS
app.get('/api/workouts/getAll', controller.getAllWorkouts)
app.post('/api/workouts/add', controller.addWorkout)
app.patch('/api/workouts/edit', controller.editWorkout)
app.delete('/api/workouts/delete/:id', controller.deleteWorkout)


let port = 3030;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})
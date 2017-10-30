import React, { Component } from 'react';
import './Workouts.css';
import { connect } from 'react-redux';
import { getAllWorkouts, addWorkout, editWorkout, deleteWorkout,
         updateWorkoutDate, updateWorkoutDescription, updateCaloriesBurned} from '../../ducks/reducer'

class Workouts extends Component {

    componentDidMount() {
       this.props.getAllWorkouts()
       this.props.addWorkout()
    }

    
    render() {

        let workoutListDisplay = this.props.workoutList.map((e, i) => {
            return(
                <div className="workouts-container" key={i}>
          
                    <div className='workoutDate'>Workout Date : {e.workout_date}</div>
                    <div className="description">Workout Description : {e.description}</div>
                    <div className="calories">Calories Burned : {e.calories_burned}</div>
                </div>
            )
        })
        return (
            <div className="workout_viewer">
                <div className="workout-container">
                    {workoutListDisplay}
                    <button onClick={() => this.addWorkout('workout')} className="add_workout_button">ADD WORKOUT</button>
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}
const outputActions = {
   getAllWorkouts, 
   addWorkout, 
   editWorkout, 
   deleteWorkout,
   updateWorkoutDate, 
   updateWorkoutDescription, 
   updateCaloriesBurned
    
}

export default connect(mapStateToProps, outputActions)(Workouts);
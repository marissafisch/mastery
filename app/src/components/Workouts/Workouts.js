import React, { Component } from 'react';
import './Workouts.css';
import { connect } from 'react-redux';
import { getAllWorkouts} from '../../ducks/reducer'

class Workouts extends Component {

    componentDidMount() {
        console.log(getAllWorkouts)
       this.props.getAllWorkouts(this.props.user.user_id)
    }

    
    render() {

        let workoutListDisplay = this.props.workoutList.map((e, i) => {
            return(
                <div className="workouts-container">
                    <div className="workoutDate">
                        Workout Date : {e.workout_date}
                    </div>
                    <div className="description">
                        Workout Description : {e.description}
                    </div>
                    <div className="calories">
                        Calories Burned : {e.calories_burned}
                    </div>
                </div>
            )
        })
        return(
        <div className="workout_viewer">
                <div className="workouts-container">
                    {workoutListDisplay}
                    <button onClick={() => this.toggleModal('workout')} className="add_workout_button">ADD WORKOUT</button>
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
    
}

export default connect(mapStateToProps, outputActions)(Workouts);
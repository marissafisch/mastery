import React, { Component } from 'react';
import './Workouts.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllWorkouts} from '../../ducks/reducer'

class Workouts extends Component {

    constructor() {
        super();

        this.state = {
            workouts: []
        }
    }

    componentDidMount (){
        this.props.getAllWorkouts()
    }
    

    handleDelete(id){
        axios.delete(`/api/delete/${id}`)
        .then( () => this.props.getAllWorkouts())
    }
    
    handleEdit(id){
        axios.put(`/api/edit`)
        .then( () => this.props.getAllWorkouts())
    }

    
    render() {

        let mappedWorkouts= this.state.workouts.map((workouts, i) => {
            console.log('hello',mappedWorkouts)
            return(
                <div className="workouts-container" key={i}>
          
                    <span className='workoutDate'>Workout Date : {workouts.workout_date}</span>
                    <span className="description">Workout Description : {workouts.description}</span>
                    <span className="calories">Calories Burned : {workouts.calories_burned}</span>
                    <button onClick={() => this.handleEdit(workouts.id)} >EDIT</button>
                    <button onClick={() => this.handleDelete(workouts.id)} >DELETE</button>
                </div>
            )
        })
        return (
            <div className="workout_viewer">
                <div className="view-workouts">
                        <h1>View Workouts</h1>
                    </div>
                <div className="workout-container">
                    {mappedWorkouts}
            
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps,{getAllWorkouts})(Workouts);
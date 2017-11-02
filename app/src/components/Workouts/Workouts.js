import React, { Component } from 'react';
import './Workouts.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllWorkouts} from '../../ducks/reducer'

class Workouts extends Component {

    constructor() {
        super();

        this.state = {
            workouts: [],
            newWorkout: '',
        }
        this.addWorkout = this.addWorkout.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount (){
        this.props.getAllWorkouts()
    }
    

    addWorkout(item) {
		this.setState({
			workouts: [...this.state.workouts, item],
			newWorkout: ''
        })
        console.log(this.state.workouts)
    }

    handleChange(value) {
		this.setState({
			newWorkout: value
		})
	}

    handleDelete(id){
        axios.delete(`http://localhost:3030/api/deleteWorkout/${id}`)
        .then( () => this.props.getAllWorkouts())
    }
    
    handleEdit(id){
        axios.put(`http://localhost:3030/api/editWorkout/${id}`)
        .then( () => this.props.getAllWorkouts())
    }

    
    render() {

        let mappedWorkouts= this.props.workoutList.map((workouts, i) => {
            
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

        var list = this.state.workouts.map((e, i) => {
			return (
				<div className="workouts-display">
					<div className="workouts">
						<span>{e}</span>

					</div>
					
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

        <div className="workouts-invite-container">
					<p>Add Workout</p>
					

					<input value={this.state.newWorkout} onChange={(e) => this.handleChange(e.target.value)} />

						<button className="add-workout" onClick={() => this.addWorkout(this.state.newWorkout)}> Add Workout</button>

					
					<div>
						{list}
					</div>
        </div>
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps,{getAllWorkouts})(Workouts);
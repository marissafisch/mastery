import axios from 'axios';

const initialState = {
    workoutDate: null,
    workoutDescription: '',
    caloriesBurned: '',
    workoutList: [],
    workout_id: 1,
  
}
//ACTION NAMES//
const UPDATE_WORKOUT_DATE = "UPDATE_WORKOUT_DATE";
const UPDATE_WORKOUT_DESCRIPTION = "UPDATE_WORKOUT_DESCRIPTION";
const UPDATE_CALORIES_BURNED = "UPDATE_CALORIES_BURNED";
const GET_ALL_WORKOUTS = "GET_ALL_WORKOUTS";
const ADD_WORKOUT = "ADD_WORKOUT";
const EDIT_WORKOUT = "EDIT_WORKOUT";
const DELETE_WORKOUT = "DELETE_WORKOUT";


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_WORKOUT_DATE:
            return Object.assign({}, state, { workoutDate: action.payload })
        case UPDATE_WORKOUT_DESCRIPTION:
            return Object.assign({}, state, { workoutDescription: action.payload })
        case UPDATE_CALORIES_BURNED:
            return Object.assign({}, state, { caloriesBurned: action.payload })
        case GET_ALL_WORKOUTS + "_FULFILLED":
            return Object.assign({}, state, { workoutList: action.payload })
        case ADD_WORKOUT + "_FULFILLED":
            return Object.assign({}, state, { workoutList: action.payload })
        case EDIT_WORKOUT + "_FULFILLED":
            return Object.assign({}, state, { workoutList: action.payload })
        case DELETE_WORKOUT + "_FULFILLED":
            return Object.assign({}, state, { workoutList: action.payload })
        default:
            return state
    }
}

export function updateWorkoutDate(workoutDate) {
    return {
        type: UPDATE_WORKOUT_DATE,
        payload: workoutDate
    }
}

export function updateWorkoutDescription(workoutDescription) {
    return {
        type: UPDATE_WORKOUT_DESCRIPTION,
        payload: workoutDescription
    }
}

export function updateCaloriesBurned(caloriesBurned) {
    return {
        type: UPDATE_CALORIES_BURNED,
        payload: caloriesBurned
    }
}

//WORKOUTS//
export function getAllWorkouts() {
    return {
        type: GET_ALL_WORKOUTS,
        payload: axios.get(`http://localhost:3030/workouts/getAll`).then(response => {
            console.log('hey', response.data)
            return response.data
        })
    }
}
export function addWorkout(obj) {
    return {
        type: ADD_WORKOUT,
        payload: axios.post(`http://localhost:3030/workouts/add`, obj).then(response => {
            return response.data
        })
    }
}

export function editWorkout(obj) {
    return {
        type: EDIT_WORKOUT,
        payload: axios.patch(`http://localhost:3030/workouts/edit`, obj).then(response => {
            return response.data
        })
    }
}

export function deleteWorkout(workout_id) {
    return {
        type: DELETE_WORKOUT,
        payload: axios.delete(`http://localhost:3030/workouts/delete/${workout_id}`).then(response => {
            return response.data
        })
    }
}

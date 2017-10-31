import axios from 'axios';

const initialState = {
        workoutList: [],
    
}

//ACTION NAMES//
const GET_ALL_WORKOUTS = "GET_ALL_WORKOUTS";




export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_WORKOUTS + "_FULFILLED":
            return Object.assign({}, state, { workoutList: action.payload })
        default:
            return state
    }
}


//WORKOUTS//
export function getAllWorkouts(workoutList) {
    return {
        type: GET_ALL_WORKOUTS,
        payload: axios.get('/api/getAll').then(response => {
            console.log('hey', response.data)
            return response.data
        })
    }
}


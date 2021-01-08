import axios from 'axios'

const initialState = {
    user:{},
    loading:false,
    error:false,
    errorMessage:''
}
const CLEAR_REDUCER = 'CLEAR_REDUCER'
export function clearReducer(){
    let action = {
        type:CLEAR_REDUCER
    }

}

export default function reducer(state,action){
    if (!state) {return state=initialState}
    if (!action) {return state}

    switch(action.type){
        case CLEAR_REDUCER:
            return {...state,...initialState}
        default:
            return state
    }
}